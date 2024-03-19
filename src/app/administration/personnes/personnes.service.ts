import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";
import { PersonneModel } from "./personne.model";
import { PersonneCreateDto } from "./dto/personne-create.dto";
import { PersonneUpdateDto } from "./dto/personne-update.dto";
import { PersonneAdapter } from "./personne.adapter";
import { HttpClient } from "@angular/common/http";
import { SearchFilter } from "../lookup/lookup.interfaces";
import { Observable, catchError, map, retry } from "rxjs";

@Injectable()
export class PersonnesService extends BaseHttpService<
    PersonneModel,
    PersonneCreateDto,
    PersonneUpdateDto
> {
    constructor(http: HttpClient, adapter: PersonneAdapter) {
        super(`${environment.apiUrl}/personnes`, http, adapter);
    }

    lookup(filter: SearchFilter): Observable<PersonneModel[]> {
        let queryFilter = "";

        for (const key in filter) {
            const value = filter[key];
            if (!value || value?.length == 0) continue;
            queryFilter += `&${key}=${value}`;
        }

        return this.http
            .get<PersonneModel[]>(
                `${environment.apiUrl}/filters/personnes?${queryFilter}`
            )
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adaptList(response))
            );
    }
}

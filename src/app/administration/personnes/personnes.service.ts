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
        return this.http
            .post<PersonneModel[]>(
                `${environment.apiUrl}/filters/personnes`,
                filter
            )
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adaptList(response))
            );
    }
}

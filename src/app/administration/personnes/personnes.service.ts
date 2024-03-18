import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";
import { PersonneModel } from "./personne.model";
import { PersonneCreateDto } from "./dto/personne-create.dto";
import { PersonneUpdateDto } from "./dto/personne-update.dto";
import { PersonneAdapter } from "./personne.adapter";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PersonnesService extends BaseHttpService<
    PersonneModel,
    PersonneCreateDto,
    PersonneUpdateDto
> {
    protected rootUrl = `${environment.apiUrl}/personnes`;

    constructor(http: HttpClient, adapter: PersonneAdapter) {
        super(http, adapter);
    }
}

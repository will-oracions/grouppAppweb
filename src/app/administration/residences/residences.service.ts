import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { ResidenceModel } from "./residence.model";
import { ResidenceAdapter } from "./residences.adapter";

@Injectable()
export class ResidencesService extends BaseHttpService<
    ResidenceModel,
    ResidenceModel,
    ResidenceModel
> {
    constructor(http: HttpClient, adapter: ResidenceAdapter) {
        super(`${environment.apiUrl}/residences`, http, adapter);
    }
}

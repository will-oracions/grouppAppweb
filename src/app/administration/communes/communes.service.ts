import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { CommuneModel } from "./commune.model";
import { CommuneAdapter } from "./communes.adapter";

@Injectable()
export class CommunesService extends BaseHttpService<
    CommuneModel,
    CommuneModel,
    CommuneModel
> {
    constructor(http: HttpClient, adapter: CommuneAdapter) {
        super(`${environment.apiUrl}/communes`, http, adapter);
    }
}

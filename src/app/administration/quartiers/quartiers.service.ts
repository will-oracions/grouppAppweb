import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { QuartierModel } from "./quartier.model";
import { QuartierAdapter } from "./quartier.adapter";

@Injectable()
export class QuartiersService extends BaseHttpService<
    QuartierModel,
    QuartierModel,
    QuartierModel
> {
    constructor(http: HttpClient, adapter: QuartierAdapter) {
        super(`${environment.apiUrl}/quartiers`, http, adapter);
    }
}

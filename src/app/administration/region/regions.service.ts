import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { RegionModel } from "./region.model";
import { RegionAdapter } from "./region.adapter";

@Injectable()
export class RegionsService extends BaseHttpService<
    RegionModel,
    RegionModel,
    RegionModel
> {
    constructor(http: HttpClient, adapter: RegionAdapter) {
        super(`${environment.apiUrl}/regions`, http, adapter);
    }
}

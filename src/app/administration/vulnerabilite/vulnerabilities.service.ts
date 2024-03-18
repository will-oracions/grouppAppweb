import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { VulnerabilityModel } from "./vulnerability.model";
import { VulnerabilitiesAdapter } from "./vulnerabilities.adapter";

@Injectable()
export class VulnerabilitiessService extends BaseHttpService<
    VulnerabilityModel,
    VulnerabilityModel,
    VulnerabilityModel
> {
    constructor(http: HttpClient, adapter: VulnerabilitiesAdapter) {
        super(`${environment.apiUrl}/communes`, http, adapter);
    }
}

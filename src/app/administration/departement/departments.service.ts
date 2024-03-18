import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { DepartmentModel } from "./department.model";
import { DepartmentAdapter } from "./department.adapter";

@Injectable()
export class DepartmentsService extends BaseHttpService<
    DepartmentModel,
    DepartmentModel,
    DepartmentModel
> {
    constructor(http: HttpClient, adapter: DepartmentAdapter) {
        super(`${environment.apiUrl}/departements`, http, adapter);
    }
}

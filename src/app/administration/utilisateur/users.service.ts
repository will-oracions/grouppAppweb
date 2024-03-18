import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { UserModel } from "./user.model";
import { UsersAdapter, UsersListResponse } from "./users.adapter";
import { catchError, map, retry } from "rxjs";
@Injectable()
export class UsersService extends BaseHttpService<
    UserModel,
    UserModel,
    UserModel
> {
    override adapter: UsersAdapter;

    constructor(http: HttpClient, adapter: UsersAdapter) {
        super(`${environment.apiUrl}/users`, http, adapter);
    }

    getAllDifferentsUsers() {
        return this.http
            .get<UsersListResponse[]>(`${this.rootURL}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adaptSuperList(response))
            );
    }
}

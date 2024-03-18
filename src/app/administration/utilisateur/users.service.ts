import { Injectable } from "@angular/core";
import { BaseHttpService } from "src/app/parteger/base-http.service";
import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { UserModel } from "./user.model";
import { UsersAdapter } from "./users.adapter";
@Injectable()
export class UsersService extends BaseHttpService<
    UserModel,
    UserModel,
    UserModel
> {
    constructor(http: HttpClient, adapter: UsersAdapter) {
        super(`${environment.apiUrl}/utilisateur`, http, adapter);
    }
}

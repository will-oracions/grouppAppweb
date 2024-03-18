import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError, map } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseAdapter } from "./base.adapter";
import { OperationStatusDto } from "./operation-status.dto";

@Injectable({ providedIn: "root" })
export class BaseHttpService<TModel, TCreateDto, TUpdateDto> {
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            rejectUnauthorized: "false",
        }),
    };

    constructor(
        protected rootURL: string,
        protected http: HttpClient,
        protected adapter: BaseAdapter<TModel>
    ) {}

    create(payload: TCreateDto): Observable<TModel> {
        return this.http.post<TModel>(`${this.rootURL}`, payload).pipe(
            retry(2),
            catchError(this.handleError),
            map((response) => this.adapter.adapt(response))
        );
    }

    getAll(): Observable<TModel[]> {
        return this.http
            .get<TModel[]>(`${this.rootURL}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adaptList(response))
            );
    }

    getById(id: number): Observable<TModel> {
        return this.http
            .get<TModel>(`${this.rootURL}/${id}`, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adapt(response))
            );
    }

    update(id: number, data: Partial<TUpdateDto>): Observable<TModel> {
        return this.http
            .put<TModel>(`${this.rootURL}/${id}`, data, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adapt(response))
            );
    }

    delete(id: number): Observable<OperationStatusDto> {
        return this.http
            .delete<OperationStatusDto>(
                `${this.rootURL}/${id}`,
                this.httpOptions
            )
            .pipe(
                retry(2),
                catchError(this.handleError),
                map((response) => this.adapter.adaptOperationStatus(response))
            );
    }

    protected handleError(error: HttpErrorResponse) {
        let errorMessage;

        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            if (error.status == 201) {
                errorMessage = { code: error.status, message: "OK" };
            } else {
                errorMessage = {
                    code: error.status,
                    message: error.error.message,
                };
            }
        }
        return throwError(errorMessage);
    }
}

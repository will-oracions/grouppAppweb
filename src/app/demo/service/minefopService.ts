import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Account } from "../interface/account/account";
import { Login } from "../interface/account/login";
import { Register } from "../interface/account/register";
import { ResetPassword } from "../interface/account/resetPassword";
import { VerifyLink } from "../interface/account/verifyLinks";


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };
  @Injectable({
    providedIn: 'root'
  })
  export class MinefopService {
  
    constructor(private httpCient: HttpClient) { }

        
    login(login: Login): Observable<Login> {
      const url = `${environment.apiMinefop}/account/login`;
      return this.httpCient.post<Account>(url, login)
        .pipe(
          retry(2),
          catchError(this.handleErrors)
        )
    }
  


    private handleErrors(error: HttpErrorResponse) {
      let errorMessage;
      console.log(error);
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        if (error.status == 200) {
          errorMessage = { "Code d'erreur": error.status, "message": "OK" };
  
        } else {
          errorMessage = { "Code d'erreur": error.status, "message": error.error.message };
  
        }
      }
      return throwError(errorMessage);
    }
  }
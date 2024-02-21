import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';



@Injectable()
export class EnumService
 {
    api?: string = "https://81.169.199.217:8443/api/public/enums/";

    constructor(private http: HttpClient) {}

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'rejectUnauthorized': 'false'
      })
    }

    get(item: string): Observable<any> {
        return this.http
          .get(this.api+item, this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.handleError)
          )
      }

      
      private handleError(error: HttpErrorResponse): any {
        let errorMessage;
        
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          if (error.status === 201) {
            errorMessage = { code: error.status, message: 'OK' };
          } else {
            errorMessage = { code: error.status, message: error.error.message };
          }
        }

        return throwError(errorMessage);
      }
    

    
}

/* /* eslint-disable no-console */
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AppService
 {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'rejectUnauthorized': 'false'
    })
  }
  getInstitution() {
    const url = `${environment.apiUrl}/administration/institutions/parametres`;
    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  

  private handleError(error: HttpErrorResponse): any {
    let errorMessage;
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status === 201) {
        errorMessage = { code: error.status, message: 'OK' };
      } else {
        errorMessage = { code: error.status, message: error };
      }
    }
    return throwError(errorMessage);
  }
}
 
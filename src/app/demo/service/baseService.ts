
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams, HttpXhrBackend } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";



export class BaseService<T> {

  apiUrl?: "https://81.169.199.217:8443/api";
  
  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
  ) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'rejectUnauthorized': 'false'
    })
  }

  getAll(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.apiUrl}${this.endpoint}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  paginate(page: number) : Observable<T[]>{
      return this.httpClient.get<T[]>(this.apiUrl+this.endpoint+"?page="+page+"&total=10")
      .pipe(
          retry(2),
          catchError(this.handleError)
      )
  }

  getOne(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}${this.endpoint}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getData(endpoint: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}${endpoint}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  add(item: any): Observable<T> {
     return this.httpClient.post<T>(`${this.apiUrl}${this.endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  update(item: T): Observable<T> {

    return this.httpClient.put<T>(`${this.apiUrl}${this.endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<T>(`${this.apiUrl}${this.endpoint}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  changeDefault(id: number, isDefault: boolean): Observable<T[]> {
    return this.httpClient
      .put<T[]>(`${this.apiUrl}/${this.endpoint}/{id}/default/{isDefault}?id=${id}&isDefault=${isDefault}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  restoreState(id: number, isEnabled: boolean): Observable<T[]> {
    return this.httpClient
      .put<T[]>(`${this.apiUrl}${this.endpoint}/{id}/state/{isEnabled}?id=${id}&isEnabled=${isEnabled}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage;

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
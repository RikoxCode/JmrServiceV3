import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { LogsService } from "../logs.service";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private urlBase: string = "";

  constructor(
      private httpClient: HttpClient,
      private logService: LogsService
  ) { }

  public setUrl(url: string){
    this.urlBase = url;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.logService._("HTTP ERROR: " + error.message + " | " + error.url, "error");
    return throwError(error);
  }

  private handleResponse<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(
        catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private makeRequest<T>(observable: Observable<T>): Observable<T> {
    return this.handleResponse(observable);
  }

  public GET<T>(url: string): Observable<T> {
    return this.makeRequest(this.httpClient.get<T>(url));
  }

  public POST<T>(url: string, body: any): Observable<T> {
    return this.makeRequest(this.httpClient.post<T>(url, body));
  }

  public DELETE<T>(url: string): Observable<T> {
    return this.makeRequest(this.httpClient.delete<T>(url));
  }

  public UPDATE<T>(url: string, body: any): Observable<T> {
    return this.makeRequest(this.httpClient.put<T>(url, body));
  }
}

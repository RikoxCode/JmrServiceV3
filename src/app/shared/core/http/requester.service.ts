import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {LogsService} from "../log/log.service";
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private headers: any = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  constructor(
    private errorResponse: ErrorResponseComponent,
    private httpClient: HttpClient,
    private logService: LogsService,
    private auth: AuthService
  ) {
    this.headers['Authorization'] = 'Bearer ' + this.auth.getToken();
  }

  public GET(url: string): any {
    try {
      this.logService._("GET request to " + url, "info");
      return this.httpClient.request('GET', url, {responseType: 'json', headers: this.headers});
    } catch (err: any) {
      this.logService._(err.message, "error");
      this.errorResponse.show(err);
      return err;
    }
  }

  public POST(url: string, body: any): any {
    try {
      this.logService._("POST request to " + url, "info");
      return this.httpClient.request('POST', url, {body: body, responseType: 'json', headers: this.headers});
    } catch (err: any) {
      this.logService._(err.message, "error");
      this.errorResponse.show(err);
      return err;
    }
  }

  public PUT(url: string, body: any): any {
    try {
      this.logService._("PUT request to " + url, "info");
      return this.httpClient.request('PUT', url, {body: body, responseType: 'json', headers: this.headers});
    } catch (err: any) {
      this.logService._(err.message, "error");
      this.errorResponse.show(err);
      return err;
    }
  }

  public DELETE(url: string): any {
    try {
      this.logService._("DELETE request to " + url, "info");
      return this.httpClient.request('DELETE', url, {responseType: 'json', headers: this.headers});
    } catch (err: any) {
      this.logService._(err.message, "error");
      this.errorResponse.show(err);
      return err;
    }
  }
}

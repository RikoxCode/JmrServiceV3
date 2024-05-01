import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {LogsService} from "../log/log.service";
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";


@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  constructor(
    private httpClient: HttpClient,
    private logService: LogsService,
    private errorHandler: ErrorResponseComponent
  ) { }

  private ErrorHandler(method: Function) {
    try {
      return method();
    } catch (err: any) {
      this.logService._(err.message, "error");
      this.errorHandler.setErrorTitle("HTTP Error");
      this.errorHandler.setErrorMessage(err.message);
      this.errorHandler.showError();
      return err;
    }
  }

  public GET(url: string): any {
    const request = this.ErrorHandler(() => {
      return this.httpClient.request('GET', url, {responseType:'json'}).subscribe((data) => {
        return data;
      });
    });

    this.logService._(request, "note");

    return request;
  }

  public POST(url: string, body: any): any {
    const request = this.ErrorHandler(() => {
      return this.httpClient.request('POST', url, {body: body, responseType: 'json', headers: this.headers}).subscribe((data) => {
        return data;
      });
    });

    return request;
  }

  public PUT(url: string, body: any): any {
    const request = this.ErrorHandler(() => {
      return this.httpClient.request('PUT', url, {body: body, responseType: 'json', headers: this.headers}).subscribe((data) => {
        return data;
      });
    });

    return request;
  }

  public DELETE(url: string): any {
    const request = this.ErrorHandler(() => {
      return this.httpClient.request('DELETE', url, {responseType: 'json', headers: this.headers}).subscribe((data) => {
        return data;
      });
    });

    return request;
  }

}

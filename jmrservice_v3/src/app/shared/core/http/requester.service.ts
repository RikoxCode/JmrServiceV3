import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {LogsService} from "../logs.service";
import Func = jasmine.Func;

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(
    private httpClient: HttpClient,
    private logService: LogsService
  ) { }

  private ErrorHandler(method: Function):any {

  }

  public GET(): any{
    const request = this.ErrorHandler(():any => {

    });
  }

}

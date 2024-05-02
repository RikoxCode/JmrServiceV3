import {ErrorHandler, Injectable} from '@angular/core';
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlingService implements ErrorHandler {
  private errorHandler: ErrorResponseComponent = new ErrorResponseComponent();
  handleError(error: any): void {
    this.errorHandler.showError();
  }
}

import {Component, Input} from '@angular/core';
import {RoutingService} from "../../../core/http/routing.service";
import {AppComponent} from "../../../../app.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-error-response',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './error-response.component.html',
  styleUrl: './error-response.component.scss',
  providers: [RoutingService]
})
export class ErrorResponseComponent {
  @Input() private title: string = "Error"
  @Input() private message: string = "An error occurred. Please try again later.";
  @Input() private stackTrace: string = "";
  public hasError: boolean = false;

  public routingService: RoutingService = new RoutingService();

  public navigateBack(): void {
    this.routingService.goBack();
    this.hideError();
  }

  public showError(): void {
    this.hasError = true;
    console.error("Error Modal = true");
  }

  public hideError(): void {
    this.hasError = false;
  }

  public getParams(): any {
    return {
      title: this.title,
      message: this.message,
      stackTrace: this.stackTrace
    }
  }

  public setErrorTitle(title: string) {
      this.title = title;
  }

  public setErrorMessage(message: string) {
      this.message = message;
  }

  public setParams(title: string, message: string, stackTrace: string) {
      this.title = title;
      this.message = message;
      this.stackTrace = stackTrace;
  }
}

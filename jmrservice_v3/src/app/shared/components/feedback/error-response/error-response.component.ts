import {Component, effect, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from "../../../core/http/routing.service";
import {AppComponent} from "../../../../app.component";
import {RouterLink} from "@angular/router";
import {GlobalErrorHandlingService} from "../../../core/handling/global-error-handling.service";

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
export class ErrorResponseComponent implements OnInit{
  @Input() public title: string = "Error";
  @Input() public message: string = "An error occurred. Please try again later.";
  @Input() public stackTrace: string = "";
  public hasError: boolean = false;

  constructor(
      private globalErrorHandlerService: GlobalErrorHandlingService,
      private routingService: RoutingService
  ) {
    effect(() => {
      this.hasError = this.globalErrorHandlerService.errorValue();
      console.log("Error found: " + this.hasError)
    });
  }

  ngOnInit() {

  }

  public navigateBack(): void {
    this.routingService.goBack();
    this.hideModal();
  }

  hideModal(): void {
    this.globalErrorHandlerService.setErrorValue(false);
  }
}

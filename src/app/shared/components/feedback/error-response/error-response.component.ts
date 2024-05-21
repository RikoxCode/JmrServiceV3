import {Component, effect, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from "../../../core/http/routing.service";
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
  public title: string = "Error";
  public message: string = "An error occurred. Please try again later.";
  public stackTrace: string = "";
  public hasError: boolean = false;

  constructor(
      private routingService: RoutingService
  ) {
    effect(() => {
      console.log("Error found: " + this.hasError)
    });
  }

  public navigateBack(): void {
    this.routingService.goBack();
    this.hideModal();
  }

  public hideModal(): void {
    this.hasError = false;
  }

  public show(error: Error): void {
    this.title = error.name;
    this.message = error.message;
    this.stackTrace = error.stack || "No stack trace available.";
    this.hasError = true;
  }
}

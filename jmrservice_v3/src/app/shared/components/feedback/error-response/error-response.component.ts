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
export class ErrorResponseComponent {
  @Input() public title: string = "Error";
  @Input() public message: string = "An error occurred. Please try again later.";
  @Input() public stackTrace: string = "";
  @Output() public hideModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
      private routingService: RoutingService
  ) { }

  public navigateBack(): void {
    this.routingService.goBack();
    this.funcHideModal();
  }

  funcHideModal(): void {
    this.hideModal.emit(false);
  }
}

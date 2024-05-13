import {Component, effect, ErrorHandler, Injectable, signal, WritableSignal} from '@angular/core';
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-global-error-handling',
    standalone: true,
    imports: [
        ErrorResponseComponent
    ],
    template: `
        @if(errorValue){
            <app-error-response [title]="errorData.name" [message]="errorData.message" [stackTrace]="errorData.stack" (hideModal)="setErrorValue(false)"></app-error-response>
        }`,
    providers: []
})
export class GlobalErrorHandlingService implements ErrorHandler {
    public errorValue = false;
    public errorData: any = null;

    constructor() {
        console.log(this.errorValue);
    }

    handleError(error: any): void {
        console.log("GlobalErrorHandlingService.handleError", error);
        this.errorData = error;
        this.setErrorValue(true);
        console.log(error.name, error.message, error.stack);
    }

    setErrorValue(value: boolean): void {
        this.errorValue = value;
    }
}

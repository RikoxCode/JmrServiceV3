import {Component, effect, ErrorHandler, Injectable, signal, WritableSignal} from '@angular/core';
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";

@Component({
    selector: 'app-global-error-handling',
    standalone: true,
    imports: [
        ErrorResponseComponent
    ],
    template: '',
    providers: []
})
export class GlobalErrorHandlingService implements ErrorHandler {
    public errorValue: WritableSignal<boolean> = signal(false);
    public errorData: any = null;

    constructor() { }

    handleError(error: any): void {
        console.log(this.errorValue());
        this.errorValue.set(true);
        console.log(this.errorValue());
        this.errorData = error;
        console.log(error.name, error.message, error.stack);
    }

    setErrorValue(value: boolean): void {
        this.errorValue.set(value);
    }
}

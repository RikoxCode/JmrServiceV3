import {Component, ErrorHandler, Injectable} from '@angular/core';
import {ErrorResponseComponent} from "../../components/feedback/error-response/error-response.component";

@Component({
    selector: 'app-global-error-handling',
    standalone: true,
    imports: [
        ErrorResponseComponent
    ],
    template: '',
    providers: [ErrorResponseComponent]
})
export class GlobalErrorHandlingService implements ErrorHandler {

    constructor(
        private errorHandler: ErrorResponseComponent
    ) {
    }

    handleError(error: any): void {
        this.errorHandler.setParams(error.type, error.message, error.stackTrace)
        this.errorHandler.showError();
        console.log(error.type, error.message, error.stackTrace);
    }
}

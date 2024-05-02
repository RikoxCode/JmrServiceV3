import {ApplicationConfig, ErrorHandler} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {GlobalErrorHandlingService} from "./shared/core/handling/global-error-handling.service";
import {ErrorResponseComponent} from "./shared/components/feedback/error-response/error-response.component";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        {provide: ErrorHandler, useClass: GlobalErrorHandlingService},
        ErrorResponseComponent,
        GlobalErrorHandlingService
    ]
};

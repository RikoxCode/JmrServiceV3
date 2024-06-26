import {ApplicationConfig, ErrorHandler} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {ErrorResponseComponent} from "./shared/components/feedback/error-response/error-response.component";
import {provideToastr} from "ngx-toastr";
import {provideAnimations} from "@angular/platform-browser/animations";
import {LanguageService} from "./shared/core/local/language.service";
import {ProfileComponent} from "./feats/auth/profile/profile.component";
import {AuthService} from "./shared/core/auth/auth.service";
import {RequesterService} from "./shared/core/http/requester.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    ErrorResponseComponent,
    LanguageService,
  ]
};

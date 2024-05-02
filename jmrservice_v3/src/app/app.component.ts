import {Component, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {ErrorResponseComponent} from "./shared/components/feedback/error-response/error-response.component";
import {GlobalErrorHandlingService} from "./shared/core/handling/global-error-handling.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatIcon,
    ErrorResponseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'jmrservice_v3';
}

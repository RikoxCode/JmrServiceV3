import {Component, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {ErrorResponseComponent} from "./shared/components/feedback/error-response/error-response.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    MatIcon,
    ErrorResponseComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'jmrservice_v3';
}

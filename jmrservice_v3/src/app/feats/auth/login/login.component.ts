import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {LogsService} from "../../../shared/core/log/log.service";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ErrorResponseComponent} from "../../../shared/components/feedback/error-response/error-response.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LogsService, HttpClient, RequesterService]
})
export class LoginComponent {
  constructor(
    private logger: LogsService,
    private requester: RequesterService
  ) { }

  public async login(event: Event) {
    event.preventDefault();

    this.logger.isDevelopmentMode = true;
    this.logger._("Logging in...", "note");

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const response = await this.requester.POST(environment.apis.authAPI + '/login', {email, password});

    if (response.status !== 200) {
      throw new Error("Invalid credentials");
    }

    this.logger._(response, "");
  }

}

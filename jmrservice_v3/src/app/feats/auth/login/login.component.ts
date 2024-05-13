import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {LogsService} from "../../../shared/core/log/log.service";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../shared/core/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {HTTPError} from "../../../shared/core/error-types/httperror";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
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
    private requester: RequesterService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  public async login(event: Event) {
    event.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    await this.loginRequest(email, password);
  }

  private async loginRequest(email: string, password: string) {
      await this.requester.POST(environment.apis.authAPI + '/login', {
        email,
        password
      }).subscribe((data: any = "") => {
        this.auth.setUser(data.token, data.user);
        this.toastr.success('Login successful', 'Login successful')
        window.location.href = '/';
      }, (err: any) => {
        console.log(err)
        if(err.status === 401){
          this.toastr.error('Invalid credentials', 'Login failed')
        } else {
          this.toastr.error(err.error.message, 'Login failed')
        }
      });
  }
}

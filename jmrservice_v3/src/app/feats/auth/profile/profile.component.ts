import { Component } from '@angular/core';
import {AuthService} from "../../../shared/core/auth/auth.service";
import {NgOptimizedImage} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {MatIcon} from "@angular/material/icon";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    HttpClientModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [RequesterService, HttpClient]
})
export class ProfileComponent {
  name = this.auth.getUser().name;
  nickname = this.auth.getUser().nickname;
  email = this.auth.getUser().email;
  bio = this.auth.getUser().bio;

  isEditing: boolean = false;
  isTextEditing: boolean = false;

  constructor(
    public auth: AuthService,
    private requester: RequesterService,
  ) { }

  protected readonly environment = environment;

  public logout() {
    this.logoutRequest();
  }

  private async logoutRequest() {
    await this.requester.POST(environment.apis.authAPI + '/logout', {}).subscribe((data: any = "") => {
      this.auth.logout();
      window.location.href = '/';
    }, (err: any) => {
      console.log(err)
    });
  }
}

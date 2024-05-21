import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {IUser} from "../../../core/interfaces/user";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'app-username',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './username.component.html',
  styleUrl: './username.component.scss',
  providers: [AuthService]
})
export class UsernameComponent {
  user: IUser = {} as IUser;

  constructor(
    public auth: AuthService
  ) {
    this.user = this.auth.getUser();
  }
}

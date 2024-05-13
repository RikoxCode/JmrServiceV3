import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../../../shared/core/auth/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name = 'Max Mustermann';
  nickname = 'Maxi';
  email = 'max.mustermann@example.com';
  phone = '123-456-7890';
  address = '123 Beispielstraße, Musterstadt, 12345';

  isEditing: boolean = false;

  constructor(
      public auth: AuthService
  ) { }
}

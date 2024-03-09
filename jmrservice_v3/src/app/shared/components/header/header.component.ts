import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
}

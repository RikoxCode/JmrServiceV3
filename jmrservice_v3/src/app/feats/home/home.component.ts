import {Component, OnInit} from '@angular/core';
import {GoToAdminBtnComponent} from "./go-to-admin-btn/go-to-admin-btn.component";
import {CommonModule} from "@angular/common";
import {AuthGuardService} from "../../shared/core/auth/guards/auth.guard.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GoToAdminBtnComponent,
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  isAdmin: boolean = false;

  constructor(
    private authGuard: AuthGuardService
  ) {

  }

  ngOnInit() {
    this.isAdmin = this.authGuard.canShow()
  }
}

import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {AuthGuardService} from "../../core/auth/guards/auth.guard.service";
import {OnInit} from '@angular/core';
import {__} from "../../core/local/init";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  isLoggedIn: boolean = false;

  constructor(
    private authGuard: AuthGuardService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authGuard.canShowToUser();
  }

    protected readonly __ = __;
}

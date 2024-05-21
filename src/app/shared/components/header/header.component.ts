import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from "@angular/router";
import {AuthGuardService} from "../../core/auth/guards/auth.guard.service";
import {AuthService} from "../../core/auth/auth.service";
import {environment} from "../../../../environments/environment";
import {UsernameComponent} from "../users/username/username.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    UsernameComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AuthGuardService]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  isActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true, 'transition-colors':true, 'duration-300':true, 'transform':true, 'bg-gray-100':true, 'dark:bg-gray-800':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};
  isNotActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true,  'transition-colors':true, 'duration-300':true, 'transform':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};

  activatedRoute: any = {
    dashboard: false,
    accounts: false,
    tickets: false,
    settings: false,
    admin_dashboard: false,
    archive: false
  };

  constructor(
    private authGuard: AuthGuardService,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    this.isAdmin = this.authGuard.canShowToAdmin();
    this.isLoggedIn = this.authGuard.canShowToUser();
  }

  public setRouteActive(route: string): void {
    for (let key in this.activatedRoute) {
      this.activatedRoute[key] = false;
    }

    this.activatedRoute[route] = true;
  }

  protected readonly environment = environment;
}

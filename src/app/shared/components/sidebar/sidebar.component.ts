import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AdminGuard} from "../../core/auth/guards/admin.guard";
import {AuthGuardService} from "../../core/auth/guards/auth.guard.service";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {UsernameComponent} from "../users/username/username.component";
import {AuthService} from "../../core/auth/auth.service";

export interface SidebarRoute {
  url: string;
  name: string;
  icon: string;
  canShowTo: {
    loggedUser: boolean;
    unLoggedUser: boolean;
    admin: boolean;
  };
  isActive: boolean;
  hasSeperator: boolean;
  isHidden: boolean;
  isOnBottom: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    NgClass,
    NgIf,
    UsernameComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  isActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true, 'transition-colors':true, 'duration-300':true, 'transform':true, 'bg-gray-100':true, 'dark:bg-gray-800':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};
  isNotActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true,  'transition-colors':true, 'duration-300':true, 'transform':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};

  activatedRoute: SidebarRoute[] = [
    {
      url: '',
      name: 'Home',
      icon: 'home',
      canShowTo: {
        loggedUser: true,
        unLoggedUser: true,
        admin: true
      },
      isActive: false,
      hasSeperator: false,
      isHidden: false,
      isOnBottom: false
    },
    {
      url: 'archive',
      name: 'Archive',
      icon: 'inventory',
      canShowTo: {
        loggedUser: true,
        unLoggedUser: false,
        admin: true
      },
      isActive: false,
      hasSeperator: false,
      isHidden: false,
      isOnBottom: false
    },
    {
      url: 'admin/dashboard',
      name: 'Admin Dashboard',
      icon: 'dashboard',
      canShowTo: {
        loggedUser: false,
        unLoggedUser: false,
        admin: true
      },
      isActive: false,
      hasSeperator: true,
      isHidden: false,
      isOnBottom: true
    },
    {
      url: 'account',
      name: '',
      icon: '',
      canShowTo: {
        loggedUser: true,
        unLoggedUser: false,
        admin: true
      },
      isActive: false,
      hasSeperator: true,
      isHidden: false,
      isOnBottom: true
    },
  ];

  constructor(
    private authGuard: AuthGuardService,
    private adminGuard: AdminGuard,
    public auth: AuthService
  ) {
    this.isAdmin = this.adminGuard.canShowToAdmin();
    this.isLoggedIn = this.authGuard.canShowToUser();

    // Set the active route
    this.setRouteActive(window.location.pathname.split('/')[1]);

    // Sort the routes by isOnBottom
    this.activatedRoute.sort((a: SidebarRoute, b: SidebarRoute) => {
      if (a.isOnBottom && !b.isOnBottom) {
        return 1;
      }
      if (!a.isOnBottom && b.isOnBottom) {
        return -1;
      }
      return 0;
    });
  }

  public setRouteActive(route: string): void {
    this.activatedRoute.map((item: SidebarRoute) => {
      item.isActive = false;
    });

    this.activatedRoute.map((item: SidebarRoute) => {
      if (item.url === route) {
        item.isActive = true;
      }
    });
  }

  public getClassAssets(route: SidebarRoute): any {
    return route.isActive ? this.isActiveRoute : this.isNotActiveRoute;
  }

  protected readonly environment = environment;
}

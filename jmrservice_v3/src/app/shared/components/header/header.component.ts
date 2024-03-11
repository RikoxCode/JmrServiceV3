import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  isActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true, 'transition-colors':true, 'duration-300':true, 'transform':true, 'bg-gray-100':true, 'dark:bg-gray-800':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};
  isNotActiveRoute: any = {'flex': true, 'items-center':true, 'px-4':true, 'py-2':true, 'text-gray-800':true, 'rounded-md':true, 'dark:text-gray-200':true,  'transition-colors':true, 'duration-300':true, 'transform':true, 'hover:bg-gray-100':true, 'dark:hover:bg-gray-800':true, 'dark:hover:text-gray-200':true, 'hover:text-gray-700':true};

  activatedRoute: any = {
    dashboard: false,
    accounts: false,
    tickets: false,
    settings: false,
    admin_dashboard: false
  };

  public setRouteActive(route: string): void {
    this.activatedRoute = {
      dashboard: false,
      accounts: false,
      tickets: false,
      settings: false,
      admin_dashboard: false
    };

    this.activatedRoute[route] = true;
  }

}

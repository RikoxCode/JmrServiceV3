import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {DashboardComponent} from "../../../../feats/admin/dashboard/dashboard.component";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanDeactivate<DashboardComponent>, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canShowToAdmin(): boolean {
    if (this.authService.isAdminUser()) {
      return true;
    }
    return false;

  }

  canActivate(): boolean {
    return this.canShowToAdmin();
  }

  canActivateChild(): boolean {
    return this.canShowToAdmin();
  }

  canDeactivate(component: DashboardComponent): boolean {
    return true;
  }

  canLoad(): boolean {
    return this.canShowToAdmin();
  }
}

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
    if(this.authService.isAuthenticatedUser()){
      if (this.authService.isAdminUser()) {
        return true;
      }
      return false;
    }
    return false;
  }

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canDeactivate(component: DashboardComponent): boolean {
    return true;
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.canShowToAdmin()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/not-authorized']);
      return false;
    }
  }
}

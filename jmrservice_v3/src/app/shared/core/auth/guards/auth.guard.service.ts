import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DashboardComponent} from "../../../../feats/admin/dashboard/dashboard.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild,CanDeactivate<DashboardComponent>, CanLoad  {
  constructor(private authService: AuthService, private router: Router) {}

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
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/not-authorized']);
      return false;
    }
  }
}

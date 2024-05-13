import { Routes } from '@angular/router';
import { HomeComponent } from "./feats/home/home.component";
import { PagenotfoundComponent } from "./feats/errors/pagenotfound/pagenotfound.component";
import { DashboardComponent } from "./feats/admin/dashboard/dashboard.component";
import { SettingsComponent } from "./feats/admin/settings/settings.component";
import { AuthGuardService } from "./shared/core/auth/guards/auth.guard.service";
import {NotauthorizedComponent} from "./feats/errors/notauthorized/notauthorized.component";
import {LoginComponent} from "./feats/auth/login/login.component";
import {RegistrationComponent} from "./feats/auth/registration/registration.component";
import {PasswordResetComponent} from "./feats/auth/password-reset/password-reset.component";
import {TableComponent} from "./feats/archive/table/table.component";
import {DemoComponent} from "./feats/archive/demo/demo.component";
import {ProfileComponent} from "./feats/auth/profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: 'archive',
    children: [
      {
        path: 'table',
        canActivate: [AuthGuardService],
        component: TableComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      }
    ]
  },
  {
    path: 'not-authorized',
    component: NotauthorizedComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

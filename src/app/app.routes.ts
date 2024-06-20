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
import {FindFriendsComponent} from "./feats/users/find-friends/find-friends.component";
import {InspectComponent} from "./feats/archive/table/inspect/inspect.component";
import {EditComponent} from "./feats/archive/table/inspect/edit/edit.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
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
    path: 'users',
    children: [
      {
        path: 'find-friends',
        component: FindFriendsComponent
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
        children: [
          {
            path: '',
            component: TableComponent
          },
          {
            path: 'inspect',
            children: [
              {
                path: ':id',
                component: InspectComponent,
                pathMatch: 'full'
              },
              {
                path: 'edit/:id',
                component: EditComponent
              }
            ]
          }
        ]
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

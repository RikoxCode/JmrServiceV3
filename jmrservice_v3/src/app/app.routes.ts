import { Routes } from '@angular/router';
import {HomeComponent} from "./feats/home/home.component";
import {PagenotfoundComponent} from "./feats/errors/pagenotfound/pagenotfound.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

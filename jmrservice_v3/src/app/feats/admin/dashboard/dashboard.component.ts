import { Component } from '@angular/core';
import {UsrCountComponent} from "./charts/usr-count/usr-count.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UsrCountComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

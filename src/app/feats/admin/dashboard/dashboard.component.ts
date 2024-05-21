import { Component } from '@angular/core';
import { UsrCountComponent } from "./charts/usr-count/usr-count.component";
import {ChartsComponent} from "./charts/charts.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

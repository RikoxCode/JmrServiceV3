import { Component } from '@angular/core';
import {UsrCountComponent} from "./usr-count/usr-count.component";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    UsrCountComponent
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {

}

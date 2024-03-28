import { Component } from '@angular/core';
import {DatatableComponent} from "../table/datatable/datatable.component";

interface IDemoData {
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    DatatableComponent
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  public demoData: Array<IDemoData> = [
    {
      name: 'John',
      age: 25,
      city: 'New York'
    },
    {
      name: 'Jane',
      age: 30,
      city: 'Los Angeles'
    },
    {
      name: 'Doe',
      age: 35,
      city: 'Chicago'
    }
  ]
}

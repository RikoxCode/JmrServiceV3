import { Component } from '@angular/core';

@Component({
  selector: 'app-usr-count',
  standalone: true,
  imports: [],
  templateUrl: './usr-count.component.html',
  styleUrl: './usr-count.component.scss'
})
export class UsrCountComponent {
  userCount: number = Math.round(Math.random() * 1000);
}

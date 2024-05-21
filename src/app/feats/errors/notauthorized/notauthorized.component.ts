import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-notauthorized',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './notauthorized.component.html',
  styleUrl: './notauthorized.component.scss'
})
export class NotauthorizedComponent {

}

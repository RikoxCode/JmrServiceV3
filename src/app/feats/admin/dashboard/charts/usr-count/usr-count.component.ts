import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-usr-count',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './usr-count.component.html',
  styleUrl: './usr-count.component.scss'
})
export class UsrCountComponent {
@Input() count: number = 0;
@Input() label: string = "Users";
@Input() imgUrl: string = "https://via.placeholder.com/150"
@Input() btnConfig: {isShown: boolean, text: string, link: string} = {isShown: false, text: "View", link: "/"};
}

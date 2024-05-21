import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss'
})
export class ToastrComponent {
  @Input() msg: string = 'test message';
  @Input() icon: string = 'cancel';
  @Input() btnConfig: { isShown:boolean, link: string, text: string } = { isShown: false, link: '', text: '' };
}

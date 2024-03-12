

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon'
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-go-to-admin-btn',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './go-to-admin-btn.component.html',
  styleUrl: './go-to-admin-btn.component.scss'
})
export class GoToAdminBtnComponent {

}

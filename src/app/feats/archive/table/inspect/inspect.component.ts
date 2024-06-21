import { Component } from '@angular/core';
import {RequesterService} from "../../../../shared/core/http/requester.service";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "../../../../shared/components/feedback/loader/loader.component";
import {MatIcon} from "@angular/material/icon";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-inspect',
  standalone: true,
  imports: [
    HttpClientModule,
    LoaderComponent,
    MatIcon,
    RouterLink
  ],
  templateUrl: './inspect.component.html',
  styleUrl: './inspect.component.scss',
  providers: [RequesterService, HttpClient]
})
export class InspectComponent {
  public notemeta: any = {};
  public isLoading: boolean = true;

  constructor(
    private requester: RequesterService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      this.getNotemeta(params['id'])
    });
  }

  getNotemeta(slug: string) {
    try {
      this.isLoading = true;
      this.requester.GET(environment.apis.notemetaAPI + slug).subscribe((data: any = "") => {
        this.notemeta = data.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getFormatedDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  protected readonly window = window;

  deleteNote() {
    try {
      this.requester.DELETE(environment.apis.notemetaAPI + this.notemeta.slug).subscribe(() => {
        this.isLoading = false;
        this.toastr.success('Note deleted successfully', 'Success');
        this.window.location.href = '/archive';
      });
    } catch (error) {
      console.log(error);
      this.toastr.error('An error occurred while deleting note', 'Error');
    }
  }
}

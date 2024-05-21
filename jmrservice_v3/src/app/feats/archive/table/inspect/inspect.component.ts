import { Component } from '@angular/core';
import {RequesterService} from "../../../../shared/core/http/requester.service";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "../../../../shared/components/feedback/loader/loader.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-inspect',
  standalone: true,
  imports: [
    HttpClientModule,
    LoaderComponent,
    MatIcon
  ],
  templateUrl: './inspect.component.html',
  styleUrl: './inspect.component.scss',
  providers: [RequesterService, HttpClient]
})
export class InspectComponent {
  public notemeta: any = {};
  public average: any = {};
  public isLoading: boolean = true;

  constructor(
    private requester: RequesterService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.getNotemeta(params['id'])
    });
  }

  getNotemeta(id: string) {
    try {
      this.isLoading = true;
      this.requester.GET(environment.apis.notemetaAPI + id).subscribe((data: any = "") => {
        this.notemeta = data.notemeta;
        this.average = data.average;
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
}
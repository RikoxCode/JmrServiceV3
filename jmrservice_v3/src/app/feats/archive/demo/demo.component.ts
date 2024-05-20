import { Component } from '@angular/core';
import {DatatableComponent} from "../table/datatable/datatable.component";
import {environment} from "../../../../environments/environment";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {Notemeta} from "../../../shared/core/interfaces/notemeta";
import {LoaderComponent} from "../../../shared/components/feedback/loader/loader.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    DatatableComponent,
    LoaderComponent,
    HttpClientModule,
    MatIcon
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  providers: [RequesterService, HttpClient]
})
export class DemoComponent {
  public demoData: Notemeta[] = []
  public isLoading: boolean = true;

  constructor(
    private requester: RequesterService
  ) {
    this.getDemoData();
  }

  public async getDemoData() {
    this.isLoading = true;
    await this.requester.GET(environment.apis.notemetaAPI).subscribe((data: any = "") => {
      let result: Notemeta[] = [];
      data.slice(0, 5).forEach((row: Notemeta) => {
        row.arrangeur = row.arrangeur === "" ? "unknown" : row.arrangeur;
        row.komponist = row.komponist === "" ? "unknown" : row.komponist;
        row.duration = row.duration === "" ? "unknown" : row.duration;
        result.push(row);
        console.log(row);
      });
      this.demoData = result;
      this.isLoading = false;
    }, (err: any) => {
      console.log(err)
    });
  }
}

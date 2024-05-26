import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Notemeta} from "../../../shared/core/interfaces/notemeta";
import {DatatableComponent} from "./datatable/datatable.component";
import {LoaderComponent} from "../../../shared/components/feedback/loader/loader.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HttpClientModule,
    DatatableComponent,
    LoaderComponent,
    MatIcon
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [RequesterService, HttpClient]
})
export class TableComponent implements OnInit{
  public isLoading: boolean = true;

  public tableData: Notemeta[] = [];

  constructor(
    private route: ActivatedRoute,
    private requester: RequesterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    });
    this.getTableData();
  }

  public async getTableData() {
    this.isLoading = true;
    await this.requester.GET(environment.apis.notemetaAPI).subscribe((data: any = "") => {
      let result: Notemeta[] = [];
      data.data.forEach((row: Notemeta) => {
        row.arranger = row.arranger === "" ? "unknown" : row.arranger;
        row.composer = row.composer === "" ? "unknown" : row.composer;
        row.duration = row.duration === "" ? "unknown" : row.duration;
        result.push(row);
        console.log(row);
      });
      this.tableData = result;
      this.isLoading = false;
    }, (err: any) => {
      console.log(err)
    });
  }
}

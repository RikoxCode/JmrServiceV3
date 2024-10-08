import {Component, OnInit} from '@angular/core';
import {RequesterService} from "../../../shared/core/http/requester.service";
import {environment} from "../../../../environments/environment";
import {IUser} from "../../../shared/core/interfaces/user";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "../../../shared/components/feedback/loader/loader.component";
import {DatatableComponent} from "../../archive/table/datatable/datatable.component";
import {TableComponent} from "./usr/table/table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HttpClientModule,
    LoaderComponent,
    DatatableComponent,
    TableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [RequesterService, HttpClient]
})
export class DashboardComponent implements OnInit {
  public users: IUser[] = [];
  public columns: string[] = [
    'id',
    'name',
    'email',
    'nickname',
    'bio',
    'created_at',
  ];


  public isLoading: boolean = true;

  constructor(
    private readonly requester: RequesterService
  ) { }

  ngOnInit(): void {
    this.requestUser();
  }

  private async requestUser(){
    // This is a request to get all users
    await this.requester.GET(environment.apis.userAPI).subscribe((data: any = "") => {

      const result = data.data.map((user: any) => {
        user.created_at = new Date(user.created_at).toLocaleDateString();
        user.updated_at = new Date(user.updated_at).toLocaleDateString();

        return user;
      });

      this.users = data.data;
      console.log(data)
      this.isLoading = false;
    }, (err: any) => {
      console.log(err)
    });
  }
}

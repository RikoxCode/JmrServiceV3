import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../../environments/environment";
import {RequesterService} from "../../../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IUser} from "../../../../../shared/core/interfaces/user";
import {AuthService} from "../../../../../shared/core/auth/auth.service";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [RequesterService, HttpClient]
})
export class TableComponent implements OnInit {
  public users: IUser[] = [];

  public isLoading: boolean = true;

  constructor(
    private readonly requester: RequesterService,
    public readonly auth: AuthService,
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

  protected readonly environment = environment;
}

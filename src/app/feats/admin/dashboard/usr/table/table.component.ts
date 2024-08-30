import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../../environments/environment";
import {RequesterService} from "../../../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IUser} from "../../../../../shared/core/interfaces/user";
import {AuthService} from "../../../../../shared/core/auth/auth.service";
import {Notemeta} from "../../../../../shared/core/interfaces/notemeta";

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
  public sortedUsers: IUser[] = [];

  public isLoading: boolean = true;

  constructor(
    private readonly requester: RequesterService,
    public readonly auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.requestUser();
  }

  public searchTableData(event: any, isForced: boolean = false) {
    let search: any = null;

    if(isForced){
      search = event;
    }else{
      try {
        event.preventDefault();
        search = event.target.value;
      }catch (e){
        search = event.innerText;
      }
    }

    if(search === null || search === undefined){
      search = "";
    }

    search = search.toLowerCase();
    this.isLoading = true;
    if (search === "") {
      this.resetTableData();
    } else {
      this.getAdvancedSearch(search);
    }
    this.isLoading = false;
  }

  private resetTableData(){
    this.sortedUsers = this.users;
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
      this.sortedUsers = this.users;
      console.log(data)
      this.isLoading = false;
    }, (err: any) => {
      console.log(err)
    });
  }

  private getAdvancedSearch(search: string){
    let results: IUser[] = [];
    console.log(search.split(":")[1]);
    this.users.forEach((user: IUser) => {
      switch (search.split(":")[0]) {
        case "name":
          if (user.name.toString().toLowerCase() === search.split(":")[1]) {
            results.push(user);
          }
          break;
        case "email":
          if (user.email.toLowerCase().includes(search.split(":")[1])) {
            results.push(user);
          }
          break;
        case "role":
          if(search.split(":")[1].toLowerCase().includes(("admin"))){
            this.users.forEach(user => {
              if(user.permissions_level > 90){
                results.push(user);
              }
            });
          }

          if(search.split(":")[1].toLowerCase().includes(("user"))){
            this.users.forEach(user => {
              if(user.permissions_level < 90){
                results.push(user);
              }
            });
          }
          break;
        case "bio":
          if (user.bio.toLowerCase().includes(search.split(":")[1])) {
            results.push(user);
          }
          break;
        case "blocked":
          if (user.blocked_reason.toLowerCase().includes(search.split(":")[1])) {
            results.push(user);
          }
          break;
        case "created_at":
          if (user.created_at.toLowerCase().includes(search.split(":")[1])) {
            results.push(user);
          }
          break;
        default:
          if (user.name.toLowerCase().includes(search)
              || user.email.toLowerCase().includes(search)
              || user.created_at.toString().toLowerCase().includes(search)) {
            results.push(user);
          }

          if(user.bio != null || user.bio != undefined ){
            if (user.bio.toLowerCase().includes(search) && !results.includes(user)) {
              results.push(user);
            }
          }
          if(user.blocked_reason != null || user.blocked_reason != undefined ){
            if (user.blocked_reason.toLowerCase().includes(search) && !results.includes(user)) {
              results.push(user);
            }
          }
          break;
      }
    });

    this.sortedUsers = results;
  }

  protected readonly environment = environment;
  protected readonly document = document;
}

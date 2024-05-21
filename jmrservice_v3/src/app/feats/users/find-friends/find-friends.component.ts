import { Component } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../shared/core/auth/auth.service";
import {RequesterService} from "../../../shared/core/http/requester.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-find-friends',
  standalone: true,
  imports: [
    HttpClientModule,
  ],
  templateUrl: './find-friends.component.html',
  styleUrl: './find-friends.component.scss',
  providers: [RequesterService, HttpClient]
})
export class FindFriendsComponent {
  public users: any = [];
  public isLoading: boolean = false;
  constructor(
    public auth: AuthService,
    public requester: RequesterService
  ) {
    this.getUsers();
  }

  private getUsers() {
    this.isLoading = true;
    this.requester.GET(environment.apis.friendAPI).subscribe((data: any = "") => {
      data.data.forEach((user: any) => {
        user.backgroundImage = this.getRandomBackgroundImage();
      });
      this.users = data.data;
      this.isLoading = false;
    }, (err: any) => {});
  }

  public isFollowing(user: any) {
    let result = false;
    user.friends.forEach((friend: any) => {
      if (friend.id === this.auth.getUser().id) {
        result = true;
        return;
      }
      result = false;
    });
    return result;
  }

  public getRandomBackgroundImage() {
    const images = [
      'https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg',
      'https://png.pngtree.com/background/20230613/original/pngtree-4k-wallpaper-landscape-picture-image_3429750.jpg',
      'https://img.freepik.com/premium-photo/photo-majestic-mountain-range-sunrise-with-small-lake-lone-tree-foreground_978463-562.jpg?w=360',
      'https://cdn.wallpapersafari.com/70/16/L7n5w0.jpg',
      'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg',
      'https://mir-s3-cdn-cf.behance.net/projects/404/913597178971149.Y3JvcCwxMDMzLDgwOCwyNTAsMA.png'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  public generateAt(name: string) {
    return '@' + name;
  }

  public followUser(user: any) {
    this.requester.POST(environment.apis.friendAPI + '/' + user.id, {}).subscribe((data: any = "") => {}, (err: any) => {});
  }

  protected readonly environment = environment;
}

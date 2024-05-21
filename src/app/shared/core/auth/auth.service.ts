import {Component, Injectable} from '@angular/core';
import {CleanUser, IUser} from "../interfaces/user";
import {ProfileComponent} from "../../../feats/auth/profile/profile.component";
import {RequesterService} from "../http/requester.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private cleanUser!: CleanUser;
    private user: IUser = {} as IUser;

    constructor() {
      this.cleanUser = new CleanUser();
      this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : this.user = this.cleanUser.clean();
    }

    public setUser(token: string, user: any) {
        this.user = user;
        this.user!.token = token;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
    }

    public getUser(): IUser {
        return this.user || this.cleanUser.clean();
    }

    public getToken(): string {
        return this.user.token !== "" ? this.user!.token : "";
    }

    public isAuthenticatedUser(): boolean {
        return this.user.token !== "";
        //return true;
    }

    public isAdminUser(): boolean {
        if(this.isAuthenticatedUser()) {
            return this.user!.permissions_level >= 80 || this.user!.is_sys_admin;
            //return true;
        }
        return false;
    }

    public logout() {
        this.user = this.cleanUser.clean();
        localStorage.removeItem('user');
    }
}

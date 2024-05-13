import {Component, Injectable} from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private user: User | null = null;

    constructor() {
      this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    }

    public setUser(token: string, user: any) {
        this.user = user;
        this.user!.token = token;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
    }

    public getUser(): User {
        return this.user || {} as User;
    }

    public getToken(): string {
        return this.user != null ? this.user!.token : "";
    }

    public isAuthenticatedUser(): boolean {
        return this.user !== null;
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
        this.user = null;
        localStorage.removeItem('user');
    }
}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "../interface/account/user";
import { AccountService } from "./account.service";

@Injectable({
    providedIn: 'root',
  })
  export class AuthentificationsService {
    public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    public readonly TOKEN_NAME = 'Key';
    isLoggedIn$ = this._isLoggedIn$.asObservable();
    user: any | null;
    tokens:any;
    get token(): any {
  
      return localStorage.getItem(this.TOKEN_NAME);
    }
  
    get userName(): any {
      return localStorage.getItem("user");
    }
    get userId(): any {
      return localStorage.getItem("userId");
    }
    get profile(): any {
      return localStorage.getItem("profile");
    }
    get role():any {
      return localStorage.getItem("role");
  
    }
    constructor(private apiService: AccountService, private router: Router) {
      this._isLoggedIn$.next(!!this.token);
    }
  
    login(val:any) {
      return this.apiService.login(val).pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.TOKEN_NAME, response.token);
          this.user = this.getUser(response.token);
          localStorage.setItem("userId",this.user.UserId)

          this.router.navigateByUrl("/administration")
          localStorage.setItem("user", JSON.stringify(this.user));
          localStorage.setItem("role", JSON.stringify(this.user.role));
        })
      );
    }
  
    logout(){
      localStorage.clear();
      this.router.navigateByUrl("/");
      this._isLoggedIn$.next(false);

  
    }
    cleardata(){
      localStorage.clear();
  
    }
  
    private getUser(token: any): User | null {
      if (!token) {
        return null
      }
  
      let data=  JSON.parse(atob(token.split('.')[1])) as User;
      console.log(data)
      return data;
    }
  }
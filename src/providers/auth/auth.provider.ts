import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {PLIVO_CONFIG} from "../../config/plivo.config";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.interface";
import {UserProvider} from "../user/user.provider";

/*
 Generated class for the AuthProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class AuthProvider {

  private API_URL:string = `https://api.plivo.com/v1/Account/${PLIVO_CONFIG.AUTH_ID}/Message/`;
  private is_authenticated:boolean;
  private LOCAL_STORAGE_IS_AUTHENTICATED="authenticated";
  private LOCAL_STORAGE_USER_PHONE="phone";
  constructor(private http:Http,private userProvider:UserProvider)
  {
    this.is_authenticated = true;
    let isAuthenticated = localStorage.getItem(this.LOCAL_STORAGE_IS_AUTHENTICATED);
    let userPhone = localStorage.getItem(this.LOCAL_STORAGE_USER_PHONE);

    if(isAuthenticated && JSON.parse(isAuthenticated) == true && userPhone)
    {
      this.authenticateUser(userPhone);
      // this.authenticatedUser$ = this.userProvider.getUser(userPhone);
    }
  }
  signWithPhone(phoneNumber:string) : Observable<any>
  {
    let headers = new Headers();

    headers.append("content-type","application/json");
    headers.append("Authorization", "Basic " + btoa(PLIVO_CONFIG.AUTH_ID + ":" + PLIVO_CONFIG.AUTH_TOKEN));
    return this.http.post(this.API_URL,{
      src:PLIVO_CONFIG.SENDER_NUMBER,
      dst:`+972${phoneNumber.substr(1)}`,
      text:"The verification code is :what ever"
    },{headers:headers}).map((response)=>
                             {
                               console.log(response);
                               return {response:response,smsCode:1234};
                             });
  }

  isAuthenticated():Observable<boolean>
  {
    return Observable.of(this.is_authenticated);
  }
  getAuthenticatedUser() : Observable<User>
  {
    if(!this.isAuthenticated())
    {
      return Observable.of(null);
    }
    else
    {
      // return this.authenticatedUser$;
    }

  }
  async authenticateUser(phone)
  {
    localStorage.setItem(this.LOCAL_STORAGE_IS_AUTHENTICATED,`true`);
    localStorage.setItem(this.LOCAL_STORAGE_USER_PHONE,`${phone}`);
    await this.userProvider.getUser(phone)
    this.is_authenticated = true;
  }
  logout()
  {
    localStorage.removeItem(this.LOCAL_STORAGE_IS_AUTHENTICATED);
    localStorage.removeItem(this.LOCAL_STORAGE_USER_PHONE);
    this.is_authenticated = false;

  }


}

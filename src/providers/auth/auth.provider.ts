import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable , Subject} from "rxjs";
import {User} from "../../models/User/user.interface";
import {SupervisorProvider} from "../supervisor/supervisor.provider";

@Injectable()
export class AuthProvider
{

  // private API_URL:string = `https://api.plivo.com/v1/Account/${PLIVO_CONFIG.AUTH_ID}/Message/`;
  public authStatus:Subject<boolean>;
  private LOCAL_STORAGE_IS_AUTHENTICATED="authenticated";
  private LOCAL_STORAGE_USER_PHONE="phone";
  private LOCAL_STORAGE_USER_ID="id";
  public user:User;
  constructor(private http:Http,private supervisorProvider:SupervisorProvider)
  {
    this.authStatus = new Subject<boolean>();
  }


  getSessionUserId():string
  {
    let isAuthenticated = localStorage.getItem(this.LOCAL_STORAGE_IS_AUTHENTICATED) || false;
    let userPhone = localStorage.getItem(this.LOCAL_STORAGE_USER_PHONE) ;
    let userId = localStorage.getItem(this.LOCAL_STORAGE_USER_ID) ;

    if (isAuthenticated && JSON.parse(isAuthenticated) == true && userPhone && userId)
    {
      return userId;
    }
    return null;
  }

  validateSession()
  {
    console.log("In validate session");
    let id = this.getSessionUserId();
    let result = false;
    if(id)
    {
      result = true;
    }
    this.authStatus.next(result);

  }


  signWithPhone(phoneNumber:string) : Observable<any>
  {
    return this.supervisorProvider.getAll([`phone=${phoneNumber}`]);

    // let headers = new Headers();

    // headers.append("content-type","application/json");
    // headers.append("Authorization", "Basic " + btoa(PLIVO_CONFIG.AUTH_ID + ":" + PLIVO_CONFIG.AUTH_TOKEN));
    // return this.http.post(this.API_URL,{
    //   src:PLIVO_CONFIG.SENDER_NUMBER,
    //   dst:`+972${phoneNumber.substr(1)}`,
    //   text:"The verification code is :what ever"
    // },{headers:headers}).map((response)=>
    //                          {
    //                            console.log(response);
    //                            return {response:response,smsCode:1234};
    //                          });
  }

  // getAuthenticatedUser() : Observable<User>
  // {
  //   if(!this.isAuthenticated())
  //   {
  //     return Observable.of(null);
  //   }
  //   else
  //   {
  //     // return this.authenticatedUser$;
  //   }

  // }

  getSessionUser(id:string):Observable<User>
  {
    return this.supervisorProvider.getById(id);
  }

  authenticateUser(user:User)
  {
    console.log("THe logged user is",user);
    this.user = user;
    localStorage.setItem(this.LOCAL_STORAGE_IS_AUTHENTICATED,`true`);
    localStorage.setItem(this.LOCAL_STORAGE_USER_PHONE,user.phone);
    localStorage.setItem(this.LOCAL_STORAGE_USER_ID,user._id);
    this.authStatus.next(true);
    console.log("Autch request received and the user is authenticated");
  }
  logout()
  {
    console.log("In logout");
    localStorage.removeItem(this.LOCAL_STORAGE_IS_AUTHENTICATED);
    localStorage.removeItem(this.LOCAL_STORAGE_USER_PHONE);
    localStorage.removeItem(this.LOCAL_STORAGE_USER_ID);
    this.authStatus.next(false);

  }


}

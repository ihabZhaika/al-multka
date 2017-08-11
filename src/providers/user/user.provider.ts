import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {SupervisorProvider} from "../supervisor/supervisor.provider";
import {User} from "../../models/User/user.interface";

@Injectable()
export class UserProvider
{

  profile:User;
  constructor(public supervisorProvider:SupervisorProvider)
  {

  }




}

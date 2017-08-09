import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";
import {User} from "../../models/User/user.interface";

@Injectable()
export class UserProvider {

  API_PATH="/users/";
  constructor()
  {
  }


}

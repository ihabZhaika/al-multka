import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";
import {User} from "../../models/User/user.interface";

@Injectable()
export class UserProvider {

  API_PATH="/users/";
  constructor(private database:AngularFireDatabase)
  {
  }

  createUser(user:User) : string
  {
    return this.database.list(this.API_PATH).push(user).key;
  }
  async getUser(phoneNumber)
  {
    return this.database.object(`${this.API_PATH}/${phoneNumber}`);
  }
  async saveUser(user:User)
  {
  //  let user$: FirebaseObjectObservable<User> =  this.database.object(`${this.API_PATH}/${user.phone}`);
  //   try
  //   {
  //     await user$.set(user);
  //     return true;
  //   }
  //   catch (e)
  //   {
  //     return false;
  //   }
  //
  }

}

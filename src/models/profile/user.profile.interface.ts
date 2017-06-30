import {Profile} from "./profile.interface";
import {Role} from "../role/role.enum";
import {Permission} from "../permission/permission.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface UserProfile extends Profile
{
  role:Role
  permissions:Permission[];
}

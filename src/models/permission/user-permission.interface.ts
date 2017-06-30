import {Permission} from "./permission.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface UserPermissions
{
  userId:string;
  permissions:Permission[];
}

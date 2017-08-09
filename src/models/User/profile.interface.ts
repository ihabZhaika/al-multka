import {Gender} from "../gender/gender.enum";
/**
 * Created by ihab on 6/30/17.
 */
export interface Profile
{
  _id?:string;
  fullName:string;
  address:string;
  birthData:string;
  gender:Gender|String;

}

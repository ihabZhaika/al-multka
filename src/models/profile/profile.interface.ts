import {Gender} from "../gender/gender.enum";
/**
 * Created by ihab on 6/30/17.
 */
export interface Profile
{
  fullName:string;
  Address:string;
  birthData:Date;
  gender:Gender;

}

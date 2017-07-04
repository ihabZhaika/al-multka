import {User} from "./user.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Supervisor extends User
{
  qualifications:string
  phoneNumbers:string[];
  currentTask:string;
  coursesIds:string[];
}

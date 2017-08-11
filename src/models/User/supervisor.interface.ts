import {User} from "./user.interface";
import {Course} from "../course/course.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Supervisor extends User
{
  qualifications:string
  // the login is on the primary phone number
  phoneNumbers:string[];
  currentTask:string;
}

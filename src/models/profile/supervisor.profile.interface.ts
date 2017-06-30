import {UserProfile} from "./user.profile.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface SupervisorProfile extends UserProfile
{
  qualifications:string
  phoneNumbers:string[];
  currentTask:string;
  coursesIds:string[];
}

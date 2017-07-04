import {Profile} from "../User/profile.interface";
import {ContactPerson} from "../contact-person/contact-person.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Pupil extends Profile
{
  privateNotes:string;
  publicNotes:string;
  contactPeople:ContactPerson[]
}

import {ContactPerson} from "../contact-person/contact-person.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Place
{
  _id?:string;
  name:string;
  contactPeople:ContactPerson[];
}

import {Place} from "../../models/place/place.interface";
import {CONTACT_PEOPLE} from "../contact-person/contacat-people.mock"
/**
 * Created by ihab on 7/2/17.
 */

const places:Place[]=
  [
    {
      id:"1",
      name:"مسجد احمدالساحوري",
      contactPeople:[CONTACT_PEOPLE[1],CONTACT_PEOPLE[4]]
    },
    {
      id:"2",
      name:"مسجد الانوار",
      contactPeople:[CONTACT_PEOPLE[0]]
    },
    {
      id:"3",
      name:"مسجد علي بن ابي طالب",
      contactPeople:[CONTACT_PEOPLE[2],CONTACT_PEOPLE[3]]
    },
    {
      id:"4",
      name:"مسجد فلان ابن فلان",
      contactPeople:[CONTACT_PEOPLE[1]]
    }
  ];

export const PLACES = places;
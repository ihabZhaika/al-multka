import {Place} from "../../models/place/place.interface";
import {CONTACT_PEOPLE} from "../contact-person/contacat-people.mock"
import {ObjectId} from "../../utils/id-generator";
/**
 * Created by ihab on 7/2/17.
 */

const places:Place[]=
  [
    {
      _id:ObjectId(),
      name:"مسجد احمدالساحوري",
      contactPeople:[CONTACT_PEOPLE[1],CONTACT_PEOPLE[4]]
    },
    {
      _id:ObjectId(),
      name:"مسجد الانوار",
      contactPeople:[CONTACT_PEOPLE[0]]
    },
    {
      _id:ObjectId(),
      name:"مسجد علي بن ابي طالب",
      contactPeople:[CONTACT_PEOPLE[2],CONTACT_PEOPLE[3]]
    },
    {
      _id:ObjectId(),
      name:"مسجد فلان ابن فلان",
      contactPeople:[CONTACT_PEOPLE[1]]
    }
  ];

export const PLACES = places;

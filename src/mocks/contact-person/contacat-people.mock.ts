import {ContactPerson} from "../../models/contact-person/contact-person.interface";
/**
 * Created by ihab on 7/2/17.
 */
const contactPeople:ContactPerson[]=
  [
    {
      name:"ايهاب زحايكة",
      phones:["0532809974","05328099XX"]
    },
    {
      name:"عمر جعابيص",
      phones:["0528879901"]
    },
    {
      name:"محمد قلان",
      phones:["0588888888"]
    },
    {
      name:"علي هلسة",
      phones:["0533333333"]
    },
    {
      name:"فلان ابن فلان ابن فلان",
      phones:["0532809974","05328099XX","0588888888"]
    },
  ];

export const CONTACT_PEOPLE = contactPeople;

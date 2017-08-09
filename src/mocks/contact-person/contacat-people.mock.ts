import {ContactPerson} from "../../models/contact-person/contact-person.interface";
/**
 * Created by ihab on 7/2/17.
 */
const contactPeople:ContactPerson[]=
  [
    {
      name:"ايهاب زحايكة",
      phones:[{prefix:"+972",number:"0532809974"},{prefix:"+971",number:"05328099XX"}]
    },
    {
      name:"عمر جعابيص",
      phones:[{prefix:"+972",number:"0528879901"}]
    },
    {
      name:"محمد قلان",
      phones:[{prefix:"+972",number:"0588888888"}]
    },
    {
      name:"علي هلسة",
      phones:[{prefix:"+972",number:"0533333333"}]
    },
    {
      name:"فلان ابن فلان ابن فلان",
      phones:[{prefix:"+972",number:"0532809974"},{prefix:"+972",number:"05328099XX"},{prefix:"+972",number:"0588888888"}]
    },
  ];

export const CONTACT_PEOPLE = contactPeople;

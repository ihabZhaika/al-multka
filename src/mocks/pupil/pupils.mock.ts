import {CONTACT_PEOPLE} from "../contact-person/contacat-people.mock"
import {Pupil} from "../../models/pupil/pupil.interface";
import {Gender} from "../../models/gender/course.gender.enum";
/**
 * Created by ihab on 7/2/17.
 */


const pupils:Pupil[]=
  [
    {
      fullName:"ايهاب زحايكة",
      address:"القدس , جبل المكبر",
      gender:Gender[Gender.ذكر],
      birthData:new Date("July 31, 1995 11:13:00"),
      privateNotes:"يحتاج الى المزيد من الوقت",
      publicNotes:"ممتاز",
      contactPeople:[CONTACT_PEOPLE[0]]
    },
    {
      fullName:"علي سلمان",
      address:"القدس , جبل المكبر",
      gender:Gender[Gender.ذكر],
      birthData:new Date("July 16, 2000 11:13:00"),
      privateNotes:"",
      publicNotes:"يحتاج الي المزبد من الحفظ",
      contactPeople:[CONTACT_PEOPLE[3]]
    },
    {
      fullName:"احمد شقيرات",
      address:"القدس ,صور باهر",
      gender:Gender[Gender.ذكر],
      birthData:new Date("July 31, 1995 11:13:00"),
      privateNotes:"",
      publicNotes:"",
      contactPeople:[CONTACT_PEOPLE[1],CONTACT_PEOPLE[2]]
    },
    {
      fullName:"فلان ابن فلان ",
      address:"",
      gender:Gender[Gender.انثى],
      birthData:new Date("June 31, 2014 11:13:00"),
      privateNotes:"very bad",
      publicNotes:"very good",
      contactPeople:[CONTACT_PEOPLE[4]]
    }

  ];

export const PUPILS = pupils;

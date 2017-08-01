import {CONTACT_PEOPLE} from "../contact-person/contacat-people.mock";
import {Gender} from "../../models/gender/gender.enum";
import {DateFormatPipe} from "../../pipes/date-format/date-format.pipe";
import {Supervisor} from "../../models/User/supervisor.interface";
import {Role} from "../../models/role/role.enum";
import {Permission} from "../../models/permission/permission.interface";
/**
 * Created by ihab on 7/2/17.
 */

let pupilsPermission:Permission = {name:"pupils",create:true,read:true,update:true,delete:false};
let coursesPermission:Permission = {name:"courses",create:false,read:true,update:true,delete:false};

const supervisors:Supervisor[]=
  [
    {
      id:"1",
      fullName:"ايهاب زحايكة",
      address:"القدس , جبل المكبر",
      gender:Gender.ذكر,
      birthData:new Date().toISOString(),
      phone:"053256554",
      role:Role.supervisor,
      permissions:[pupilsPermission],
      qualifications:"first degree in A,B,C",
      phoneNumbers:[],
      currentTask:"teaching kids",
      coursesIds:[]
    },
    {
      id:"2",
      fullName:"عمر جعابيص",
      address:"القدس , جبل المكبر",
      gender:Gender.ذكر,
      birthData:new Date().toISOString(),
      phone:"0599999999",
      role:Role.supervisor,
      permissions:[pupilsPermission,coursesPermission],
      qualifications:"لقب اول في الشريعة",
      phoneNumbers:["+972532889564"],
      currentTask:"teaching kids",
      coursesIds:[]
    },
    {
      id:"3",
      fullName:"فلان الفلاني",
      address:"القدس ,صورباهر",
      gender:Gender.ذكر,
      birthData:new Date().toISOString(),
      phone:"05396545",
      role:Role.supervisor,
      permissions:[coursesPermission],
      qualifications:"first degree in A,B,C",
      phoneNumbers:[],
      currentTask:"teaching kids",
      coursesIds:[]
    }

  ];

export const SUERPVISORS = supervisors;

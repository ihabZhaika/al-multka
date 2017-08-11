import {Gender} from "../../models/gender/gender.enum";
import {Supervisor} from "../../models/User/supervisor.interface";
import {Role} from "../../models/role/role.enum";
import {Permission} from "../../models/permission/permission.interface";
/**
 * Created by ihab on 7/2/17.
 */

let pupilsPermission:Permission = {pageName:"PupilsPage",create:true,read:true,update:true,erase:false};
let coursesPermission:Permission = {pageName:"CoursesPage",create:false,read:true,update:true,erase:false};

const supervisors:Supervisor[]=
  [
    {
      _id:"598dcd5e6545004bc3d7e6b1",
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
    },
    {
      _id:"598dcd5e8d6cf463cf5a8a57",
      fullName:"عمر جعابيص",
      address:"القدس , جبل المكبر",
      gender:Gender.ذكر,
      birthData:new Date().toISOString(),
      phone:"0599999999",
      role:Role.admin,
      permissions:[pupilsPermission,coursesPermission],
      qualifications:"لقب اول في الشريعة",
      phoneNumbers:["+972532889564"],
      currentTask:"teaching kids",
    },
    {
      _id:"598dcd5efde7e10e794c87fa",
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
    }

  ];

export const SUPERVISORS = supervisors;

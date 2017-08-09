import {Gender} from "../../models/gender/gender.enum";
import {Supervisor} from "../../models/User/supervisor.interface";
import {Role} from "../../models/role/role.enum";
import {Permission} from "../../models/permission/permission.interface";
import {ObjectId} from "../../utils/id-generator";
/**
 * Created by ihab on 7/2/17.
 */

let pupilsPermission:Permission = {name:"pupils",create:true,read:true,update:true,erase:false};
let coursesPermission:Permission = {name:"courses",create:false,read:true,update:true,erase:false};

const supervisors:Supervisor[]=
  [
    {
      _id:ObjectId(),
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
      courses:[]
    },
    {
      _id:ObjectId(),
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
      courses:[]
    },
    {
      _id:ObjectId(),
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
      courses:[]
    }

  ];

export const SUERPVISORS = supervisors;

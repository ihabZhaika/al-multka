import {Course} from "../../models/course/course.interface";
import {PLACES} from "../place/places.mock";
import {CourseGender} from "../../models/gender/course.gender.enum";
import {SUERPVISORS} from "../supervisor/supervisors.mock";
import {PUPILS} from "../pupil/pupils.mock";
import {PARTS} from "../part/parts.mock";
import {Day} from "../../models/time/day.enum";
import {AttendanceStatus} from "../../models/attendance/attendance-status.enum";
/**
 * Created by ihab on 7/9/17.
 */

let date  = new Date("April 31, 2017 18:13:00");
const courses:Course[] =
  [

    {
      id:"1",
      title:"Course A",
      place:PLACES[0],
      gender:CourseGender.اناث,
      teachDays:[{day:Day.الأثنين,from:new Date().toISOString(),to:new Date().toISOString()}],
      ageRange:{from:16,to:18},
      dateRange:{from:new Date("April 31, 2017 11:13:00").toISOString(),to:new Date("July 31, 1995 11:13:00").toISOString()},
      supervisors:[SUERPVISORS[0]],
      pupils:[PUPILS[0],PUPILS[1],PUPILS[3]],
      supervisorsPermissions:[{userId:SUERPVISORS[0].id,permissions:[{name:"settings",create:false,delete:false,read:true,update:true}]}],
      attendances:[{date:new Date('April 31, 2017 11:13:00').toISOString(),pupilsAttendances:[{pupil:PUPILS[0],attended:AttendanceStatus.حضور},{pupil:PUPILS[1],attended:AttendanceStatus.حضور}]},{date:new Date().toISOString(),pupilsAttendances:[{pupil:PUPILS[0],attended:AttendanceStatus.حضور},{pupil:PUPILS[1],attended:AttendanceStatus.غائب},]}],
      parts:[PARTS[0],PARTS[2]],
      pupilsExams:{ [PUPILS[0].id]:{partExams:[],suraExams:[]}}
    }
  ];

export const COURSES = courses;

// new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()

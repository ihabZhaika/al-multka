import {Course} from "../../models/course/course.interface";
import {PLACES} from "../place/places.mock";
import {CourseGender} from "../../models/gender/course.gender.enum";
import {SUPERVISORS} from "../supervisor/supervisors.mock";
import {PUPILS} from "../pupil/pupils.mock";
import {PARTS} from "../part/parts.mock";
import {Day} from "../../models/time/day.enum";
import {AttendanceStatus} from "../../models/attendance/attendance-status.enum";
import {ObjectId} from "../../utils/id-generator";
/**
 * Created by ihab on 7/9/17.
 */

console.log(PLACES);
console.log(PUPILS);

const courses:Course[] =
  [

    {
      _id:ObjectId(),
      title:"Course A",
      place:PLACES[0],
      gender:CourseGender[CourseGender.اناث],
      teachDays:[{day:Day[Day.الأثنين],from:new Date().toISOString(),to:new Date().toISOString()}],
      ageRange:{from:16,to:18},
      dateRange:{from:new Date("April 31, 2017 11:13:00").toISOString(),to:new Date("July 31, 1995 11:13:00").toISOString()},
      supervisors:[SUPERVISORS[0]],
      pupils:[{pupil:PUPILS[0],partExams:[],suraExams:[]},{pupil:PUPILS[1],partExams:[],suraExams:[]},{pupil:PUPILS[3],partExams:[],suraExams:[]}],
      supervisorsPermissions:[{userId:SUPERVISORS[0]._id,permissions:[{pageName:"settings",create:false,erase:false,read:true,update:true}]}],
      attendances:[{date:new Date('April 31, 2017 11:13:00').toISOString(),pupilsAttendances:[{pupil:PUPILS[0],attended:AttendanceStatus.حضور},{pupil:PUPILS[1],attended:AttendanceStatus.حضور}]},{date:new Date().toISOString(),pupilsAttendances:[{pupil:PUPILS[0],attended:AttendanceStatus.حضور},{pupil:PUPILS[1],attended:AttendanceStatus.غائب},]}],
      parts:[PARTS[0],PARTS[2]],
    }
  ];

// new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()

export const COURSES = courses;

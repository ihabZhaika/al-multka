import {Place} from "../place/place.interface";
import {TeachDay} from "../time/teach-day.interface";
import {AgeRange} from "../age/age-range.interface";
import {DateRange} from "../time/date-range.interface";
import {UserPermissions} from "../permission/user-permission.interface";
import {AttendanceDay} from "../attendance/attendance-day.interface";
import {Part} from "../part/part.interface";
import {PupilExam} from "../exam/pupil-exam.interface";
import {Supervisor} from "../User/supervisor.interface";
import {Pupil} from "../pupil/pupil.interface";
import {CourseGender} from "../gender/course.gender.enum";
/**
 * Created by ihab on 6/30/17.
 */
export interface Course
{
  _id?:string;
  title:string;
  place:Place;
  gender:CourseGender|String;
  teachDays:TeachDay[];
  ageRange:AgeRange;
  dateRange:DateRange;
  supervisors:Supervisor[];
  pupils:Pupil[];
  supervisorsPermissions:UserPermissions[];
  attendances:AttendanceDay[];
  parts:Part[];
  pupilsExams:PupilExam[]




}

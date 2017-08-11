import {Place} from "../place/place.interface";
import {TeachDay} from "../time/teach-day.interface";
import {AgeRange} from "../age/age-range.interface";
import {DateRange} from "../time/date-range.interface";
import {UserPermissions} from "../permission/user-permission.interface";
import {AttendanceDay} from "../attendance/attendance-day.interface";
import {Part} from "../part/part.interface";
import {Supervisor} from "../User/supervisor.interface";
import {CourseGender} from "../gender/course.gender.enum";
import {CoursePupil} from "./course-pupil";
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
  pupils:CoursePupil[];
  supervisorsPermissions:UserPermissions[];
  attendances:AttendanceDay[];
  parts:Part[];

}

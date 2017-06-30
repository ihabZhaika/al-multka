import {Place} from "../place/place.interface";
import {TeachDay} from "../time/teach-day.interface";
import {Gender} from "../gender/gender.enum";
import {AgeRange} from "../age/age-range.interface";
import {DateRange} from "../time/date-range.interface";
import {UserPermissions} from "../permission/user-permission.interface";
import {AttendanceDay} from "../attendance/attendance-day.interface";
import {Part} from "../part/part.interface";
import {PupilExam} from "../exam/pupil-exam.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Course
{
  title:string;
  place:Place;
  gender:Gender;
  teachDays:TeachDay[];
  ageRange:AgeRange;
  dateRange:DateRange;
  supervisorsIds:string[];
  pupilsIds:string[];
  supervisorsPermissions:UserPermissions[];
  attendances:AttendanceDay[];
  parts:Part[];
  pupilsExams:PupilExam[];




}

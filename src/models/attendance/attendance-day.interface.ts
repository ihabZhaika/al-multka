import {PupilAttendance} from "./pupil-attendance.interface";
/**C
 * Created by ihab on 6/30/17.
 */
export interface AttendanceDay
{
  _id?:string;
  date:string;
  pupilsAttendances:PupilAttendance[];
}

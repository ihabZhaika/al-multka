import {PupilAttendance} from "./pupil-attendance.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface AttendanceDay
{
  date:Date;
  pupilsAttendances:PupilAttendance[];
}

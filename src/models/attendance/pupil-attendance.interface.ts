import {Pupil} from "../pupil/pupil.interface";
import {AttendanceStatus} from "./attendance-status.enum";
/**
 * Created bycour ihab on 6/30/17.
 */
export interface PupilAttendance
{
  pupil:Pupil;
  attended:AttendanceStatus;


}

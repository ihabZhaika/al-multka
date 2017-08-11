import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Course} from "../../models/course/course.interface";
import {CourseProvider} from "../../providers/course/course.provider";
import {CourseViewPage} from "../course-view/course-view";
import {AttendanceDay} from "../../models/attendance/attendance-day.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {Pupil} from "../../models/pupil/pupil.interface";
import {PupilAttendance} from "../../models/attendance/pupil-attendance.interface";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {AttendanceStatus} from "../../models/attendance/attendance-status.enum";
import {CoursePupil} from "../../models/course/course-pupil";

@IonicPage()
@Component({
  selector: 'page-course-attendance-days',
  templateUrl: 'course-attendance-days.html',
})
@PageNameInjector("CourseAttendanceDaysPage")
export class CourseAttendanceDaysPage
{
  course:Course;
  constructor(public navCtrl: NavController, public navParams: NavParams, public courseProvider:CourseProvider)
  {
    this.course = navParams.get(CourseViewPage.COURSE_PARAMS_KEY)
  }

  selectItem(attendanceDay:AttendanceDay)
  {
    this.navCtrl.push("CourseAttendanceDayViewPage",{model:attendanceDay,mode:ViewMode.view,course:this.course});
  }

  addNewAttendanceDay():void
  {
    this.navCtrl.push("CourseAttendanceDayViewPage",{model:this.initEmptyAttendanceDay(),mode:ViewMode.create,course:this.course});
  }
  initEmptyAttendanceDay():AttendanceDay
  {
    let pupilsAttendance:PupilAttendance[]=[];
    this.course.pupils.forEach((coursePupil:CoursePupil)=>
                               {
                                 pupilsAttendance.push({pupil:coursePupil.pupil,attended:AttendanceStatus.حضور})
                               });
    let attendanceDay:AttendanceDay =
    {
      date : new Date().toISOString(),
      pupilsAttendances:pupilsAttendance
    };
    return attendanceDay;
  }


}

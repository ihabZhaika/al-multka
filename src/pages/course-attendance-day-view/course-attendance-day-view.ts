import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators , FormArray} from "@angular/forms";
import {CourseProvider} from "../../providers/course/course.provider";
import {PupilAttendance} from "../../models/attendance/pupil-attendance.interface";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {AttendanceDay} from "../../models/attendance/attendance-day.interface";
import {AttendanceStatus} from "../../models/attendance/attendance-status.enum";

@IonicPage()
@Component({
             selector: 'page-course-attendance-day-view',
             templateUrl: 'course-attendance-day-view.html',
           })
@PageNameInjector("CourseAttendanceDayViewPage")

export class CourseAttendanceDayViewPage extends SwitchableInputPage
{
  attendanceStatus=AttendanceStatus;
  attendanceStatusKeys:any[];
  courseId:string;
  constructor(public navCtrl: NavController, navParams: NavParams, private _fb: FormBuilder,courseProvider:CourseProvider)
  {
    super(navCtrl, navParams.get("model"));
    this.courseId = navParams.get('courseId');
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));
    //noinspection TypeScriptValidateTypes
    this.attendanceStatusKeys = Object.keys(this.attendanceStatus).filter(Number);

  }


  initForm() : void
  {
    this.modelForm = this._fb.group(
      {
        date:[new Date().toISOString(),[<any>Validators.required ]],
        pupilsAttendances:this.initPupilAttendance()

      }
    );
  }

  initPupilAttendance():FormArray
  {
    let formArray = this._fb.array([]);
    this.model.pupilsAttendances.forEach((value:PupilAttendance)=>
                                  {
                                    formArray.push(this._fb.group({
                                                                    pupil:this._fb.group(
                                                                      {
                                                                        id:[value.pupil.id],
                                                                        fullName:[value.pupil.fullName]
                                                                      }),
                                                                    attended:[value.attended]

                                                                  }));
                                  });

    return formArray;
  }
  saveView()
  {
  }

}

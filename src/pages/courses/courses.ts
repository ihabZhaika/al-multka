import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {CourseProvider} from "../../providers/course/course.provider";
import {Course} from "../../models/course/course.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {CourseGender} from "../../models/gender/course.gender.enum";
import {DateFormatPipe} from "../../pipes/date-format/date-format.pipe";
import {Day} from "../../models/time/day.enum";

@IonicPage()
@Component({
             selector: 'page-courses',
             templateUrl: 'courses.html',
           })
@PageNameInjector("CoursesPage")
export class CoursesPage {
  genders=CourseGender;
  days = Day;
  constructor(private navCtrl: NavController, private navParams: NavParams,public courseProvider:CourseProvider)
  {
    courseProvider.getCourses().subscribe(
      res=>
      {
        console.log(res);
      },
      err=>
      {
        console.error(err);
      }
    );
  }
  selectItem(course:Course)
  {
    this.navCtrl.push("CourseViewPage",{model:course,mode:ViewMode.view});
  }

  addNewCourse()
  {
    this.navCtrl.push("CourseViewPage",{model:this.initEmptyCourse(),mode:ViewMode.create});
  }
  initEmptyCourse():Course
  {
    let course =
    {
      title:"",
      place:null,
      gender:CourseGender.غير_محدد,
      teachDays:[],
      ageRange:{from:0,to:0},
      dateRange:{from:new Date().toISOString(),to:new Date().toISOString()},
      supervisors:[],
      pupils:[],
      supervisorsPermissions:[],
      attendances:[],
      parts:[],
      pupilsExams:{},
    };
    return course;
  }
}

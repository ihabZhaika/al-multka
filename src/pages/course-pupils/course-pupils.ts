import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Course} from "../../models/course/course.interface";
import {Pupil} from "../../models/pupil/pupil.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {PupilExam} from "../../models/exam/pupil-exam.interface";
import {CourseViewPage} from "../course-view/course-view";
import {Gender} from "../../models/gender/gender.enum";

/**
 * Generated class for the CoursePupilsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course-pupils',
  templateUrl: 'course-pupils.html',
})
export class CoursePupilsPage
{
  course:Course;
  genders=Gender;
  genderKeys:any;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.course = navParams.get(CourseViewPage.COURSE_PARAMS_KEY);
    //noinspection TypeScriptValidateTypes
    this.genderKeys = Object.keys(this.genders).filter(Number);

  }

  selectItem(pupil:Pupil)
  {
    this.navCtrl.push("CoursePupilsViewPage",{model:pupil,mode:ViewMode.view});
  }

  addNewCoursePupil()
  {
    this.navCtrl.push("CoursePupilsViewPage",{model:this.initEmptyModel(),mode:ViewMode.create});
  }

  initEmptyModel():any
  {
    let model =
    {
      pupil:{},
      PupilExams:[]
    };
    return model;


  }

}

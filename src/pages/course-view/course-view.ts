import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CourseProvider} from "../../providers/course/course.provider";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {FormBuilder , Validators , FormGroup , FormArray} from "@angular/forms";
import {CourseGender} from "../../models/gender/course.gender.enum";
import {Course} from "../../models/course/course.interface";
import {TeachDay} from "../../models/time/teach-day.interface";
import {Day} from "../../models/time/day.enum";
import {TimeFormatPipe} from "../../pipes/time-format/time-format.pipe";

@IonicPage()
@Component({
  selector: 'page-course-view',
  templateUrl: 'course-view.html',
})
@PageNameInjector("CourseViewPage")
export class CourseViewPage extends SwitchableInputPage
{

  static COURSE_PARAMS_KEY='course';
  genders = CourseGender;
  genderKeys:any;

  constructor(navCtrl: NavController, public navParams: NavParams,private _fb: FormBuilder,courseProvider:CourseProvider)
  {
    super(navCtrl, navParams.get("model"));
    this.initForm();
    this.fillFormWithData();
    // fill other details
    this.switchMode(navParams.get('mode'));

    //noinspection TypeScriptValidateTypes
    this.genderKeys = Object.keys(this.genders).filter(Number);

  }

  initForm() : void
  {
    this.modelForm = this._fb.group({
                                      title : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      gender : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      teachDays : this._fb.array([]),
                                      ageRange : this._fb.group({
                                                                  from : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                                                  to : ['' , [<any>Validators.required , <any>Validators.minLength(1)]]
                                                                })
                                    });
  }


  saveView()
  {
  }


  removeTeachDay(index)
  {
    this.model.teachDays.splice(index,1);
  }
  addTeachDay()
  {
    this.model.teachDays.push({day:Day.الأحد,from:new Date().toISOString(),to:new Date().toISOString()} as TeachDay)
  }
  navigateToPage(pageName)
  {
    let data ={};
    data[CourseViewPage.COURSE_PARAMS_KEY] = this.model;
    this.navCtrl.push(pageName,data);
  }

}

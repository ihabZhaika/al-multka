import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams , ModalController , Modal} from "ionic-angular";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators , FormArray} from "@angular/forms";
import {CourseProvider} from "../../providers/course/course.provider";
import {PupilAttendance} from "../../models/attendance/pupil-attendance.interface";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {Course} from "../../models/course/course.interface";
import {MultiItemSelectModalPage} from "../multi-item-select-modal/multi-item-select-modal";
import {AttendanceDay} from "../../models/attendance/attendance-day.interface";
import {KEYS} from "../../config/config.keys";

@IonicPage()
@Component({
             selector: 'page-course-attendance-day-view',
             templateUrl: 'course-attendance-day-view.html',
           })
@PageNameInjector("CourseAttendanceDayViewPage")

export class CourseAttendanceDayViewPage extends SwitchableInputPage<AttendanceDay>
{

  course:Course;
  constructor(public navCtrl: NavController, navParams: NavParams, private _fb: FormBuilder,courseProvider:CourseProvider
    ,  public modalCtrl: ModalController)
  {
    super(navCtrl, navParams.get("model"),courseProvider,navParams.get(KEYS.PERMISSION_KEY));
    this.course = navParams.get('course');
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));


  }


  initForm() : void
  {
    this.modelForm = this._fb.group(
      {
        date:[new Date().toISOString(),[<any>Validators.required ]],
        pupilsAttendances:this._fb.array([])

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
                                                                               id:[value.pupil._id],
                                                                               fullName:[value.pupil.fullName]
                                                                             }),
                                                                           attended:[value.attended]

                                                                         }));
                                         });

    return formArray;
  }



  showPupilsModal()
  {

    /**
     * this.model.pupilsAttendances.forEach((value:PupilAttendance)=>
     {
       return value.pupil
     });
     * @type {{}}
     */
        let params = {};
        params[MultiItemSelectModalPage.FILTER_FILED_KEY]="fullName";
        params[MultiItemSelectModalPage.SELECTED_ITEMS_KEY]= this.model.pupilsAttendances;
        params[MultiItemSelectModalPage.ALL_ITEMS_KEY]=this.course.pupils;
        let modal:Modal = this.modalCtrl.create(MultiItemSelectModalPage,params);
        // Getting data from the modal:
        modal.onDidDismiss(data =>
                           {
                             console.log('MODAL DATA', data[MultiItemSelectModalPage.SELECTED_ITEMS_KEY]);
                             let newItems = data[MultiItemSelectModalPage.SELECTED_ITEMS_KEY];

                             this.model.pupilsAttendances = newItems;
                           });

        modal.present();



  }
  saveView()
  {
  }

}

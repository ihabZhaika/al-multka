import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {Course} from "../../models/course/course.interface";
import {CourseViewPage} from "../course-view/course-view";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {EditableListView} from "../../models/view-mode/editable-list-view";
import {CourseProvider} from "../../providers/course/course.provider";
import {KEYS} from "../../config/config.keys";

@IonicPage()
@Component({
             selector: 'page-course-pupils',
             templateUrl: 'course-pupils.html',
           })
@PageNameInjector("CoursePupilsPage")
export class CoursePupilsPage  extends EditableListView<Course>
{
  courseId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,provider:CourseProvider)
  {
    super(navCtrl,provider,"CoursePupilsViewPage",navParams.get(KEYS.PERMISSION_KEY));
    this.courseId = navParams.get(CourseViewPage.COURSE_PARAMS_KEY);
  }

  ionViewWillEnter()
  {
    let subscription = (<CourseProvider>this.provider).getAllPupils(this.courseId).subscribe(value=>
                                                                                             {
                                                                                               this.items=value;
                                                                                               subscription.unsubscribe();
                                                                                             },
                                                                                             err=>
                                                                                             {
                                                                                               console.log(err);
                                                                                             })
  }

  initEmptyModel():any
  {
    let model =
    {
      pupil:{},
      suraExams:[],
      partExams:[]
    };
    return model;
  }



}

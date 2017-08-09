import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {CourseProvider} from "../../providers/course/course.provider";
import {Course} from "../../models/course/course.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {CourseGender} from "../../models/gender/course.gender.enum";
import {Day} from "../../models/time/day.enum";
import {COURSES} from "../../mocks/course/courses.mock";
import {PupilsPage} from "../pupils/pupils";
import {EditableListView} from "../../models/view-mode/editable-list-view";

@IonicPage()
@Component({
             selector: 'page-courses',
             templateUrl: 'courses.html',
           })
@PageNameInjector("CoursesPage")
export class CoursesPage extends EditableListView<Course>
{

  constructor(navCtrl: NavController, private navParams: NavParams,public provider:CourseProvider)
  {
    super(navCtrl,provider,"CourseViewPage");

  }

  initEmptyModel():Course
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
      pupilsExams:[],
    };
    return course;
  }
}

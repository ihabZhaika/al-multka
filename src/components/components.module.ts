/**
 * Created by ihab on 6/30/17.
 */
import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {LoginComponent} from "./login/login.component";
import {PlaceComponent} from "./place/place.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactPersonFormComponent} from "./contact-person-form/contact-person-form.component";
import {TeachDayFormComponent} from "./teach-day-form/teach-day-form.component";
import {MultiItemSelectionComponent} from "./multi-item-selection/multi-item-selection";
import {DemoComponent} from "./demo/demo";
import {PartSuraItemComponent} from "./part-sura-item/part-sura-item";
import {CourseAttendancePupilItemComponent} from "./course-attendance-pupil-item/course-attendance-pupil-item";
import {ItemsListComponent} from "./items-list/items-list";
@NgModule(
  {
    declarations:[
      LoginComponent, PlaceComponent, ContactPersonFormComponent,
      TeachDayFormComponent, MultiItemSelectionComponent,DemoComponent,PartSuraItemComponent,
      CourseAttendancePupilItemComponent,ItemsListComponent
    ],
    imports : [IonicModule,ReactiveFormsModule],
    exports:[
      LoginComponent, PlaceComponent, TeachDayFormComponent,
      ContactPersonFormComponent, ReactiveFormsModule, MultiItemSelectionComponent,DemoComponent,PartSuraItemComponent,
      CourseAttendancePupilItemComponent,ItemsListComponent
    ]
  }
)
export class ComponentsModule
{

}

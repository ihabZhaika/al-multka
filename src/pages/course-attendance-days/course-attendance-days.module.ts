import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseAttendanceDaysPage } from './course-attendance-days';
import {PipesModule} from "../../pipes/PipesModule";

@NgModule({
  declarations: [
    CourseAttendanceDaysPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseAttendanceDaysPage),
    PipesModule
  ],
  exports: [
    CourseAttendanceDaysPage
  ]
})
export class CourseAttendanceDaysPageModule {}

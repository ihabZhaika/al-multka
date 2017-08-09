import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseAttendanceDayViewPage } from './course-attendance-day-view';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
            declarations: [
              CourseAttendanceDayViewPage,
            ],
            imports:
              [
                IonicPageModule.forChild(CourseAttendanceDayViewPage),
                ComponentsModule
              ],
            exports: [
              CourseAttendanceDayViewPage
            ]
          })
export class CourseAttendanceDayViewPageModule {}

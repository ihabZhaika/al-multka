import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseAttendanceDayViewPage } from './course-attendance-day-view';

@NgModule({
  declarations: [
    CourseAttendanceDayViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseAttendanceDayViewPage),
  ],
  exports: [
    CourseAttendanceDayViewPage
  ]
})
export class CourseAttendanceDayViewPageModule {}

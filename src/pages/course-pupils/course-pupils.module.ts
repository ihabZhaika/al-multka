import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePupilsPage } from './course-pupils';

@NgModule({
  declarations: [
    CoursePupilsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursePupilsPage),
  ],
  exports: [
    CoursePupilsPage
  ]
})
export class CoursePupilsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePupilsViewPage } from './course-pupils-view';

@NgModule({
  declarations: [
    CoursePupilsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursePupilsViewPage),
  ],
  exports: [
    CoursePupilsViewPage
  ]
})
export class CoursePupilsViewPageModule {}

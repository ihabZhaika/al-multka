import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePupilsPage } from './course-pupils';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CoursePupilsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursePupilsPage),ComponentsModule
  ],
  exports: [
    CoursePupilsPage
  ]
})
export class CoursePupilsPageModule {}

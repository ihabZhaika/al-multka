import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseViewPage } from './course-view';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CourseViewPage
  ],
  imports: [
    IonicPageModule.forChild(CourseViewPage),
    ComponentsModule
  ],
  exports: [
    CourseViewPage
  ]
})
export class CourseViewPageModule {}

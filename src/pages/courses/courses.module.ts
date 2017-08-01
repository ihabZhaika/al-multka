import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';
import {PipesModule} from "../../pipes/PipesModule";

@NgModule({
  declarations: [
    CoursesPage
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
    PipesModule
  ],
  exports: [
    CoursesPage
  ]
})
export class CoursesPageModule {}

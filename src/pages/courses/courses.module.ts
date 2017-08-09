import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursesPage } from './courses';
import {PipesModule} from "../../pipes/PipesModule";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CoursesPage
  ],
  imports: [
    IonicPageModule.forChild(CoursesPage),
    PipesModule,ComponentsModule
  ],
  exports: [
    CoursesPage
  ]
})
export class CoursesPageModule {}

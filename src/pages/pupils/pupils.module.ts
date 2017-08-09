import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PupilsPage } from './pupils';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PupilsPage,
  ],
  imports: [
    IonicPageModule.forChild(PupilsPage),ComponentsModule
  ],
  exports: [
    PupilsPage
  ]
})
export class PupilsPageModule {}

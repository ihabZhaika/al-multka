import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PupilViewPage } from './pupil-view';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PupilViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PupilViewPage),ComponentsModule
  ],
  exports: [
    PupilViewPage
  ]
})
export class PupilViewPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuraViewPage } from './sura-view';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    SuraViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SuraViewPage)
  ],
  exports: [
    SuraViewPage
  ]
})
export class SuraViewPageModule {}

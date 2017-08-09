import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurasPage } from './suras';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    SurasPage,
  ],
  imports: [
    IonicPageModule.forChild(SurasPage),ComponentsModule
  ],
  exports: [
    SurasPage
  ]
})
export class SurasPageModule {}

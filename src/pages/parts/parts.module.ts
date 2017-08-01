import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartsPage } from './parts';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PartsPage,
  ],
  imports: [
    IonicPageModule.forChild(PartsPage),
    ComponentsModule
  ],
  exports: [
    PartsPage
  ]
})
export class PartsPageModule {}

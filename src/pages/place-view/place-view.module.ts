import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceViewPage } from './place-view';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PlaceViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceViewPage),
    ComponentsModule
  ],
  exports: [
    PlaceViewPage
  ]
})
export class PlaceViewPageModule {}

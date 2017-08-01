import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiItemSelectModalPage } from './multi-item-select-modal';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    MultiItemSelectModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiItemSelectModalPage),ComponentsModule
  ],
  exports: [
    MultiItemSelectModalPage
  ]
})
export class MultiItemSelectModalPageModule {}

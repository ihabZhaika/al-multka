import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartsPage } from './parts';

@NgModule({
  declarations: [
    PartsPage,
  ],
  imports: [
    IonicPageModule.forChild(PartsPage),
  ],
  exports: [
    PartsPage
  ]
})
export class PartsPageModule {}

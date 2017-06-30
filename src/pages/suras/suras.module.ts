import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurasPage } from './suras';

@NgModule({
  declarations: [
    SurasPage,
  ],
  imports: [
    IonicPageModule.forChild(SurasPage),
  ],
  exports: [
    SurasPage
  ]
})
export class SurasPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupervisorsPage } from './supervisors';

@NgModule({
  declarations: [
    SupervisorsPage,
  ],
  imports: [
    IonicPageModule.forChild(SupervisorsPage),
  ],
  exports: [
    SupervisorsPage
  ]
})
export class SupervisorsPageModule {}

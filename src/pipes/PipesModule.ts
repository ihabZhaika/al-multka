import { NgModule } from '@angular/core';
import {TimeFormatPipe} from "./time-format/time-format.pipe";
import {DateFormatPipe} from "./date-format/date-format.pipe";

@NgModule({
            declarations: [
              TimeFormatPipe,
              DateFormatPipe
            ],
            imports: [

            ],
            exports: [
              TimeFormatPipe,
              DateFormatPipe
            ]
          })
export class PipesModule { }

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {PartViewPage} from "./part-view";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
            declarations: [
              PartViewPage,
            ],
            imports:
              [
                IonicPageModule.forChild(PartViewPage)
                ,ComponentsModule
              ],

            exports: [
              PartViewPage
            ]
          })
export class PartViewPageModule {}

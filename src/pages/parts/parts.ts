import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {Part} from "../../models/part/part.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {PartProvider} from "../../providers/part/part.provider";


@IonicPage()
@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html',
})
@PageNameInjector("PartsPage")
export class PartsPage
{
  constructor(public navCtrl: NavController, public navParams: NavParams, public partProvider:PartProvider)
  {
  }
  selectItem(part:Part)
  {
    this.navCtrl.push("PartViewPage",{model:part,mode:ViewMode.view});
  }

  addNewPart()
  {
    this.navCtrl.push("PartViewPage",{model:this.initEmptyPart(),mode:ViewMode.create});
  }
  initEmptyPart():Part
  {
    let part =
      {
        name:"",
        order:0,
        suras:[]
      } as Part;
    return part;
  }



}

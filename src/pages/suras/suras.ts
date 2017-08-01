import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {SuraProvider} from "../../providers/sura/sura.provider";
import {Sura} from "../../models/sura/sura.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";


@IonicPage()
@Component({
             selector: 'page-suras',
             templateUrl: 'suras.html',
           })
@PageNameInjector("SurasPage")
export class SurasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public suraProvider:SuraProvider)
  {
  }

  selectItem(sura:Sura)
  {
    this.navCtrl.push("SuraViewPage",{model:sura,mode:ViewMode.view});
  }

  addNewSura()
  {
    this.navCtrl.push("SuraViewPage",{model:this.initEmptySura(),mode:ViewMode.create});
  }
  initEmptySura():Sura
  {
    let sura =
      {
        name:"",
        versesCount:0,
        order:0,
        description:""
      } as Sura;
    return sura;
  }
}

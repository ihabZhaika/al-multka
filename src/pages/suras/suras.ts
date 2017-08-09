import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {SuraProvider} from "../../providers/sura/sura.provider";
import {Sura} from "../../models/sura/sura.interface";
import {EditableListView} from "../../models/view-mode/editable-list-view";

@IonicPage()
@Component({
             selector: 'page-suras',
             templateUrl: 'suras.html',
           })
@PageNameInjector("SurasPage")
export class SurasPage extends EditableListView<Sura>
{

  constructor(navCtrl: NavController, public navParams: NavParams,public provider:SuraProvider)
  {
    super(navCtrl,provider,"SuraViewPage");
  }

  initEmptyModel():Sura
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

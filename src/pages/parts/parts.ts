import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {Part} from "../../models/part/part.interface";
import {PartProvider} from "../../providers/part/part.provider";
import {EditableListView} from "../../models/view-mode/editable-list-view";

@IonicPage()
@Component({
             selector: 'page-parts',
             templateUrl: 'parts.html',
           })
@PageNameInjector("PartsPage")
export class PartsPage extends EditableListView<Part>
{
  constructor(navCtrl: NavController, public navParams: NavParams, public provider:PartProvider)
  {
    super(navCtrl,provider,"PartViewPage");
  }

  initEmptyModel():Part
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

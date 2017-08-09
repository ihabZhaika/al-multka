import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {PlaceProvider} from "../../providers/place/place.provider";
import {Place} from "../../models/place/place.interface";
import {EditableListView} from "../../models/view-mode/editable-list-view";

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})

@PageNameInjector("PlacesPage")
export class PlacesPage extends EditableListView<Place>
{

  constructor(navCtrl: NavController, private navParams: NavParams,public provider:PlaceProvider)
  {
    super(navCtrl,provider,"PlaceViewPage");
  }

  initEmptyModel():Place
  {
    let place = {name:'',contactPeople:[]};
    return place;
  }


}

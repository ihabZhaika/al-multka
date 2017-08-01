import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {PlaceProvider} from "../../providers/place/place.provider";
import {Place} from "../../models/place/place.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";

/**
 * Generated class for the PlacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
@PageNameInjector("PlacesPage")
export class PlacesPage {

  constructor(private navCtrl: NavController, private navParams: NavParams,public placeProvider:PlaceProvider)
  {
  }

  selectItem(place:Place)
  {
    this.navCtrl.push("PlaceViewPage",{model:place,mode:ViewMode.view});
  }

  addNewPlace()
  {
    this.navCtrl.push("PlaceViewPage",{model:this.initEmptyPlace(),mode:ViewMode.create});
  }
  initEmptyPlace():Place
  {
    let place = {name:'',contactPeople:[]};
    return place;
  }


}

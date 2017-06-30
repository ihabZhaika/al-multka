import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}

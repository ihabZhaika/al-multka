import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {PagesNames} from "../../config/pages-name";
/**
 * Generated class for the AboutUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
@PageNameInjector("AboutUsPage")
export class AboutUsPage {

  pageTitle:string = PagesNames.AboutUsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

}

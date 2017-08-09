import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MockDataProvider} from "../../providers/mock-data/mock-data.provider";

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
             selector: 'page-tabs',
             templateUrl: 'tabs.html',
           })
export class TabsPage {

  tab1Root:string;
  tab2Root:string;
  tab3Root:string;
  tab4Root:string;
  constructor()
  {
    this.tab1Root = "EventsPage";
    this.tab2Root = "CoursesPage";
    this.tab3Root = "AboutUsPage";
    this.tab4Root = "ContactUsPage";

  }


}

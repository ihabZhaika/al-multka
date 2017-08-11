import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoursePupilsViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course-pupils-view',
  templateUrl: 'course-pupils-view.html',
})
export class CoursePupilsViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePupilsViewPage');
  }

}

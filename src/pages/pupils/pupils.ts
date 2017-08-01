import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {PupilProvider} from "../../providers/pupil/pupil.provider";
import {Pupil} from "../../models/pupil/pupil.interface";
import {ViewMode} from "../../models/view-mode/view-mode.enum";
import {Gender} from "../../models/gender/gender.enum";

/**
 * Generated class for the PupilsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pupils',
  templateUrl: 'pupils.html',
})
@PageNameInjector("PupilsPage")
export class PupilsPage {
  genders=Gender;

  constructor(public navCtrl: NavController, public navParams: NavParams,public pupilProvider:PupilProvider)
  {
  }

  selectItem(pupil:Pupil)
  {
    // edit the
    this.navCtrl.push("PupilViewPage",{model:pupil,mode:ViewMode.view});
  }

  addNewPupil()
  {
    this.navCtrl.push("PupilViewPage",{model:this.initEmptyPupil(),mode:ViewMode.create});
  }

  initEmptyPupil():Pupil
  {
    let pupil:Pupil =
    {
      fullName:"",
      address:"",
      gender:Gender.غير_محدد,
      birthData:new Date().toLocaleDateString(),
      privateNotes:"",
      publicNotes:"",
      contactPeople:[]
    };
    return pupil;
  }


}

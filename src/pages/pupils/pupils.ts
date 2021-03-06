import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {PupilProvider} from "../../providers/pupil/pupil.provider";
import {Pupil} from "../../models/pupil/pupil.interface";
import {Gender} from "../../models/gender/gender.enum";
import {EditableListView} from "../../models/view-mode/editable-list-view";
import {KEYS} from "../../config/config.keys";

@IonicPage()
@Component({
             selector: 'page-pupils',
             templateUrl: 'pupils.html',
           })
@PageNameInjector("PupilsPage")
export class PupilsPage extends EditableListView<Pupil>
{

  constructor(navCtrl: NavController, public navParams: NavParams,provider:PupilProvider)
  {
    super(navCtrl,provider,"PupilViewPage",navParams.get(KEYS.PERMISSION_KEY));
    console.log(navParams.get(KEYS.PERMISSION_KEY));
  }


  initEmptyModel():Pupil
  {
    let pupil:Pupil =
    {
      fullName:"",
      address:"",
      gender:Gender.غير_محدد,
      birthData:new Date().toISOString(),
      privateNotes:"",
      publicNotes:"",
      contactPeople:[],
    };
    return pupil;
  }



}




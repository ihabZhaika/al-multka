import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators} from "@angular/forms";
import {PupilProvider} from "../../providers/pupil/pupil.provider";
import {Gender} from "../../models/gender/gender.enum";

@IonicPage()
@Component({
  selector: 'page-pupil-view',
  templateUrl: 'pupil-view.html',
})
@PageNameInjector("PupilViewPage")

export class PupilViewPage extends SwitchableInputPage
{
  genders=Gender;
  genderKeys:any;
  constructor(navCtrl: NavController, public navParams: NavParams,protected _fb: FormBuilder,private pupilProvider:PupilProvider)
  {
    super(navCtrl, navParams.get("model"));
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));

    // noinspection TypeScriptValidateTypes
    this.genderKeys = Object.keys(this.genders).filter(Number);

    try
    {
      // let pupil = navParams.get("model");
      console.log(this.model);
      // super.setFormAndModel(this.pupilForm,pupil);


    }
    catch (e)
    { console.log("Error is ",e);}
  }



  public addContactPerson()
  {
    this.model.contactPeople.push({name:'',phones:['']});
  }

  removeContactPerson(i:number)
  {
    this.model.contactPeople.splice(i,1);
  }

  initForm() : void
  {
    this.modelForm = this._fb.group({
                                      fullName : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      address : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      birthData : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      gender : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      privateNotes : ['' , [<any>Validators.required]] ,
                                      publicNotes : ['' , [<any>Validators.required ]] ,
                                      contactPeople : this._fb.array([])
                                    });
  }

  saveView()
  {
    console.log(this.modelForm.value);
  }

}

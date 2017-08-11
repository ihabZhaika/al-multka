import {Component , ChangeDetectorRef} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators , FormArray} from "@angular/forms";
import {PupilProvider} from "../../providers/pupil/pupil.provider";
import {Gender} from "../../models/gender/gender.enum";
import {Pupil} from "../../models/pupil/pupil.interface";
import {KEYS} from "../../config/config.keys";

@IonicPage()
@Component({
             selector: 'page-pupil-view',
             templateUrl: 'pupil-view.html',
           })
@PageNameInjector("PupilViewPage")

export class PupilViewPage extends SwitchableInputPage<Pupil>
{
  selectedSegment:string = 'Details';
  genders=Gender;
  genderKeys:any;
  constructor(navCtrl: NavController, public navParams: NavParams,protected _fb: FormBuilder,private pupilProvider:PupilProvider,
              private _changeDetectionRef : ChangeDetectorRef)
  {
    super(navCtrl, navParams.get("model"),pupilProvider,navParams.get(KEYS.PERMISSION_KEY));
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));
    this.copyKeys=['fullName','address','birthData','gender','privateNotes','publicNotes','contactPeople'];
    //noinspection TypeScriptValidateTypes
    this.genderKeys = Object.keys(this.genders).filter(Number);
  }



  public addContactPerson()
  {
    this.model.contactPeople.push({name:'',phones:[]});
    this._changeDetectionRef.detectChanges();
  }

  removeContactPerson(i:number)
  {
    const control = <FormArray>this.modelForm.controls['contactPeople'];
    this.model.contactPeople.splice(i,1);
    control.removeAt(i);
  }

  initForm() : void
  {
    this.modelForm = this._fb.group({
                                      fullName : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      address : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      birthData : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      gender : ['' , [<any>Validators.required,<any>Validators.minLength(1)]] ,
                                      privateNotes : ['' ,] ,
                                      publicNotes : ['' ,] ,
                                      contactPeople : this._fb.array([])
                                    });
  }


}

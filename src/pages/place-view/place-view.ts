import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams} from "ionic-angular";
import {FormBuilder , Validators , FormArray} from "@angular/forms";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {PlaceProvider} from "../../providers/place/place.provider";
import {Place} from "../../models/place/place.interface";

/**
 * Generated class for the PlaceViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@PageNameInjector("PlaceViewPage")
@Component({
             selector: 'page-place-view',
             templateUrl: 'place-view.html',
           })
export class PlaceViewPage extends SwitchableInputPage<Place>
{



  constructor(navCtrl: NavController, private navParams: NavParams,private _fb: FormBuilder,private placeProvider:PlaceProvider)
  {
    super(navCtrl, navParams.get("model"),placeProvider);
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));
    this.copyKeys=['name','contactPeople'];

  }



  public initForm()
  {
    this.modelForm = this._fb.group({
                                      name : ['' , [<any>Validators.required , <any>Validators.minLength(1)]] ,
                                      contactPeople : this._fb.array([])
                                    });
  }



  public addContactPerson()
  {
    this.model.contactPeople.push({name:'',phones:[]});
  }

  removeContactPerson(i:number)
  {
    this.model.contactPeople.splice(i,1);
  }

  /**
   * Used in the template to get the contactPeople
   * @returns {FormArray}
   */
  get contactPeople():FormArray
  {
    return this.modelForm.get("contactPeople")as FormArray;
  }


}

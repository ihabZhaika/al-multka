import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators} from "@angular/forms";
import {SuraProvider} from "../../providers/sura/sura.provider";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";

@IonicPage()
@Component({
  selector: 'page-sura-view',
  templateUrl: 'sura-view.html',
})
@PageNameInjector("SuraViewPage")
export class SuraViewPage extends SwitchableInputPage
{


  constructor(public navCtrl: NavController, private navParams: NavParams,private _fb: FormBuilder,suraProvider:SuraProvider)
  {
    super(navCtrl, navParams.get("model"));
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));
  }
  initForm() : void
  {
    this.modelForm = this._fb.group(
      {
        name : ['',[<any>Validators.required , <any>Validators.minLength(1)]],
        versesCount : [0,[<any>Validators.required , <any>Validators.minLength(1)]],
        order : [0,[<any>Validators.required , <any>Validators.minLength(1)]],
        description : ['']
      }
    );
  }
  fillFormWithData()
  {
    this.modelForm.patchValue(this.model);
  }
  saveView()
  {
  }

}

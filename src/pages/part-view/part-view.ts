import {Component} from "@angular/core";
import {IonicPage , NavController , NavParams , ModalController , AlertController , Modal} from "ionic-angular";
import {SwitchableInputPage} from "../../models/view-mode/SwitchableView";
import {FormBuilder , Validators} from "@angular/forms";
import {PartProvider} from "../../providers/part/part.provider";
import {MultiItemSelectModalPage} from "../multi-item-select-modal/multi-item-select-modal";
import {SuraProvider} from "../../providers/sura/sura.provider";
import {Sura} from "../../models/sura/sura.interface";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";
import {Part} from "../../models/part/part.interface";

@IonicPage()
@Component({
             selector: 'page-part-view',
             templateUrl: 'part-view.html',
           })
@PageNameInjector("PartViewPage")
export class PartViewPage  extends SwitchableInputPage<Part>
{

  constructor(public navCtrl: NavController, private navParams: NavParams,private _fb: FormBuilder,
              public modalCtrl: ModalController,public partProvider:PartProvider,public suraProvider:SuraProvider,
              public alertCtrl: AlertController)
  {
    super(navCtrl, navParams.get("model"),partProvider,);
    this.initForm();
    this.fillFormWithData();
    this.switchMode(navParams.get('mode'));
    this.copyKeys=['name','order'];

  }
  initForm() : void
  {
    this.modelForm = this._fb.group(
      {
        name : ['',[<any>Validators.required , <any>Validators.minLength(1)]],
        order : [0,[<any>Validators.required , <any>Validators.minLength(1)]],
        suras : this._fb.array([])
      }
    );
  }


  fillFormWithData()
  {
    this.modelForm.patchValue(this.model);
  }


  showSurasModal()
  {
    this.suraProvider.getAll().subscribe(
      (suras:Sura[])=>
      {
        let params = {};
        params[MultiItemSelectModalPage.FILTER_FILED_KEY]="name";
        params[MultiItemSelectModalPage.SELECTED_ITEMS_KEY]=this.model.suras.slice(0);
        params[MultiItemSelectModalPage.ALL_ITEMS_KEY]=suras;
        let modal:Modal = this.modalCtrl.create(MultiItemSelectModalPage,params);
        // Getting data from the modal:
        modal.onDidDismiss(data =>
                           {
                             console.log('MODAL DATA', data[MultiItemSelectModalPage.SELECTED_ITEMS_KEY]);
                             let newItems = data[MultiItemSelectModalPage.SELECTED_ITEMS_KEY];
                             // this.modelForm.controls['suras'] = this.fillSuras(newItems);
                             this.model.suras = newItems;
                           });

        modal.present();
      },
      err=>
      {
        console.error(err);
        let content =
        {
          title: 'حدث خطاً',
          subTitle: `${err} هنالك مشكلة في جلب السور`,
          buttons: ['OK']
        };
        this.alertCtrl.create(content).present();
      }
    );


  }


}

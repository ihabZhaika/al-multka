import {BaseProvider} from "../../providers/base-provider";
import {ViewMode} from "./view-mode.enum";
import {NavController} from "ionic-angular";
import {Gender} from "../gender/gender.enum";
export abstract class EditableListView<T>
{

  public items:any[];
  public selectedItems=[];
  public isEditing:boolean;
  constructor(public navCtrl: NavController,public provider:BaseProvider,public viewPageName:string)
  {
    this.isEditing=false;

  }

  ionViewWillEnter()
  {
    let subscription = this.provider.getAll().subscribe(value=>
                                                        {
                                                          this.items=value;
                                                          subscription.unsubscribe();
                                                        },
                                                        err=>
                                                        {
                                                          console.log(err);
                                                        })
  }


  selectItem(model:T)
  {
    // edit the
    this.navCtrl.push(this.viewPageName,{model:model,mode:ViewMode.view});
  }
  addNewModel()
  {
    this.navCtrl.push(this.viewPageName,{model:this.initEmptyModel(),mode:ViewMode.create});
  }

  abstract initEmptyModel():T


  deleteItems()
  {
    let idsArr = this.selectedItems.map((item:any)=>
                                        {
                                          return item['_id'];
                                        });
    console.log(idsArr);
    this.provider.removeByIds(idsArr).subscribe(value=>
                                                {
                                                  console.log(value);
                                                  this.ionViewWillEnter();
                                                },
                                                err=>
                                                {
                                                  console.error(err);
                                                });
  }
}

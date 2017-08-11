import {BaseProvider} from "../../providers/base-provider";
import {ViewMode} from "./view-mode.enum";
import {NavController} from "ionic-angular";
import {Permission} from "../permission/permission.interface";
import {KEYS} from "../../config/config.keys";
export abstract class EditableListView<T>
{
  KEYS = KEYS;
  public items:any[];
  public selectedItems=[];
  public isEditing:boolean;
  constructor(public navCtrl: NavController,public provider:BaseProvider,public viewPageName:string,public pagePermissions:Permission)
  {
    this.isEditing=false;
    console.log(pagePermissions);
  }

  checkPermission(kind:string)
  {
    return this.pagePermissions[kind];
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
                                                        });
  }


  selectItem(model:T)
  {
    this.provider.getById(model["_id"]).subscribe(result=>
                                                  {

                                                    this.navCtrl.push(this.viewPageName,{model:result,mode:ViewMode.view,[KEYS.PERMISSION_KEY]:this.pagePermissions});
                                                  },
                                                  err=>
                                                  {
                                                    console.error(err);
                                                  });
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

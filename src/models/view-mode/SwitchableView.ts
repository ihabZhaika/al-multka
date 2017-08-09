import {ViewMode} from "./view-mode.enum";
import {NavController} from "ionic-angular";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {BaseProvider} from "../../providers/base-provider";
/**
 * Created by ihab on 7/3/17.
 */
export abstract class SwitchableInputPage<T>
{
  /**
   * Used in the html to be able to access the enum
   * @type {ViewMode}
   */
  public viewMode = ViewMode;
  protected currentViewMode:ViewMode;
  public modelForm:FormGroup;
  public model:T;
  private modelCopy:any;
  protected copyKeys=[];
  constructor(protected navCtrl: NavController,model:any,public provider:BaseProvider )
  {
    this.model = model;
  }

  abstract initForm():void

  saveModelCopy()
  {
    this.modelCopy = this.modelForm.value;

  }

  fillFormWithData()
  {
    this.modelForm.patchValue(this.model);
  }

  restoreModelCopy()
  {
    this.model = this.modelCopy;
    this.modelForm.patchValue(this.model);
  }
  switchMode(mode:ViewMode)
  {
    this.currentViewMode = mode;
    if(mode == ViewMode.edit)
    {
      this.saveModelCopy();
      // this.placeEditCopy = this.placeForm.value;
    }

  }

  cancel():void
  {
    if(this.currentViewMode == ViewMode.edit)
    {

      this.switchMode(ViewMode.view);
      this.restoreModelCopy();

    }
    else if(this.currentViewMode == ViewMode.create)
    {
      this.navCtrl.pop();
    }
  }

  isEditable():boolean
  {
    if(this.currentViewMode == ViewMode.edit || this.currentViewMode == ViewMode.create)
      return true;
    return false;
  }

  saveView()
  {
    let observable$:Observable<any>= this.update();
    if(this.currentViewMode == ViewMode.create)
      observable$ = this.insert();

    observable$.subscribe(value=>
                          {
                            console.log("Value assigned");
                            this.switchMode(ViewMode.view);
                            this.model = value;
                            this.initForm();
                            this.fillFormWithData();
                          }, err=>
                          {
                            console.error(err);
                          });
  }

  /**
   * Updates the data model with the form data
   */
  private updateModel()
  {
    let formValue = this.modelForm.getRawValue();
    for(let key of this.copyKeys)
    {
      this.model[key] = formValue[key];
    }
  }

  insert():Observable<any>
  {
    this.updateModel();
    console.log("insert");

    return this.provider.insert(this.model).flatMap(
      (value:T)=>
      {
        console.log("The saved object is");
        console.log(value);
        return Observable.of(value);
      }
    );
  }
  update():Observable<any>
  {
    this.updateModel();
    console.log("update");

    return this.provider.updateById(this.model['_id'],this.model).flatMap(
      (value:T)=>
      {
        console.log("The updated object is");
        console.log(value);
        return Observable.of(value);
      }
    );
  }

}

import {ViewMode} from "./view-mode.enum";
import {NavController} from "ionic-angular";
import {FormGroup} from "@angular/forms";
/**
 * Created by ihab on 7/3/17.
 */
export abstract class SwitchableInputPage
{
  /**
   * Used in the html to be able to access the enum
   * @type {ViewMode}
   */
  public viewMode = ViewMode;
  private currentViewMode:ViewMode;
  public modelForm:FormGroup;
  public model:any;
  private modelCopy:any;
  constructor(protected navCtrl: NavController,model:any )
  {
    this.model = model
  }

  abstract initForm():void
  abstract saveView();

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




}

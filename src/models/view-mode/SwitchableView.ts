import {ViewMode} from "./view-mode.enum";
import {NavController} from "ionic-angular";
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
  private modelCopy:any;
  constructor(private navCtrl: NavController)
  {

  }

  abstract initForm():void
  abstract saveModelCopy();
  abstract restoreModelCopy();
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

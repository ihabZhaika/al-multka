import {Component} from "@angular/core";
import {IonicPage , NavParams , ViewController} from "ionic-angular";
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";

@IonicPage()
@Component({
             selector: 'page-multi-item-select-modal',
             templateUrl: 'multi-item-select-modal.html',
           })
@PageNameInjector("MultiItemSelectModalPage")
export class MultiItemSelectModalPage
{
  static FILTER_FILED_KEY = "filterField";
  static ALL_ITEMS_KEY = "allItems";
  static SELECTED_ITEMS_KEY = "selectedItems";

  filterField="name";
  allItems:any[];
  selectedItems:any[];

  constructor(private view: ViewController, public navParams: NavParams)
  {
    this.filterField = navParams.get(MultiItemSelectModalPage.FILTER_FILED_KEY);
    this.allItems = navParams.get(MultiItemSelectModalPage.ALL_ITEMS_KEY);
    this.selectedItems = navParams.get(MultiItemSelectModalPage.SELECTED_ITEMS_KEY);

  }

  dismiss()
  {
    // Returning data from the modal:
    let data = {};
    data[MultiItemSelectModalPage.SELECTED_ITEMS_KEY] = this.selectedItems;
    this.view.dismiss(data);
  }
}

import {Component , Input , Output , EventEmitter , OnInit} from "@angular/core";
import {Sura} from "../../models/sura/sura.interface";

@Component({
             selector: 'multi-item-selection',
             templateUrl: 'multi-item-selection.html'
           })
export class MultiItemSelectionComponent implements OnInit
{


  @Input()
  filterField="name";
  @Input()
  allItems:any[];
  filteredItems:any[];
  @Input()
  selectedItems:any[];
  @Output()
  selectedItemsChange:EventEmitter<any[]>;
  constructor()
  {
    this.selectedItemsChange = new EventEmitter();
  }
  ngOnInit() : void
  {
    this.filteredItems = this.allItems;
  }
  filterItems(ev:any)
  {
    this.filteredItems = this.allItems;

    let name = ev.target.value || "";
    console.log(name);
    this.filteredItems = this.allItems.filter((item:any)=>
                                           {
                                             return item[this.filterField].indexOf(name) >=0
                                           });

  }

  isChecked(sura:Sura)
  {
    return this.selectedItems.indexOf(sura) >= 0
  }
  toggle(item:any)
  {
    let itemIndex = this.selectedItems.indexOf(item);
    if(itemIndex >= 0)
    {
      this.selectedItems.splice(itemIndex, 1);
    }
    else
    {
      this.selectedItems.push(item);
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

}

import {Component , Input} from '@angular/core';
import {FormGroup , FormArray , FormBuilder , Validators} from "@angular/forms";
import {Sura} from "../../models/sura/sura.interface";

@Component({
  selector: 'part-sura-item',
  templateUrl: 'part-sura-item.html'
})
export class PartSuraItemComponent
{
  public suraItemForm:FormGroup;
  @Input() public  formArray:FormArray;
  @Input('isEditable') public isEditable:boolean;
  @Input('model') public sura:Sura;

  ngOnInit() : void
  {
    this.suraItemForm = this.initSura(this.sura);
    this.formArray.push(this.suraItemForm);
  }
  constructor(private _fb: FormBuilder)
  {
  }

  private initSura(sura:Sura):FormGroup
  {
    let group = this._fb.group
    (
      {
        id:[sura.id],
        name : [sura.name,[<any>Validators.required , <any>Validators.minLength(1)]],
        versesCount : [sura.versesCount,[<any>Validators.required , <any>Validators.minLength(1)]],
        order : [sura.order,[<any>Validators.required , <any>Validators.minLength(1)]],
        description : [sura.description]
      });
    return group
  }
}

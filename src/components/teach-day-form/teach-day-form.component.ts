import {Component , Input , OnInit} from '@angular/core';
import {FormGroup , FormArray , FormBuilder , Validators} from "@angular/forms";
import {TeachDay} from "../../models/time/teach-day.interface";
import {Day} from "../../models/time/day.enum";


@Component({
  selector: 'teach-day-form',
  templateUrl: 'teach-day-form.component.html'
})
export class TeachDayFormComponent implements OnInit
{
  days = Day;
  dayKeys:any;
  public teachDayForm:FormGroup;
  @Input() public  formArray:FormArray;
  @Input('isEditable')
  public isEditable:boolean;
  @Input('model')
  public teachDay:TeachDay;

  ngOnInit() : void
  {
    this.teachDayForm = this.initTeachDay(this.teachDay);
    this.formArray.push(this.teachDayForm);


  }
  constructor(private _fb: FormBuilder)
  {
    //noinspection TypeScriptValidateTypes
    this.dayKeys = Object.keys(this.days).filter(Number);
  }

  private initTeachDay(teachDay?:TeachDay):FormGroup
  {
    let day:Day = Day.الأحد;
    let from:string = new Date().toISOString();
    let to:string = new Date().toISOString();
    if(teachDay)
    {
      day = teachDay.day;
      from = teachDay.from;
      to= teachDay.to;

    }
    return this._fb.group(
      {
        day:[day,[<any>Validators.required]],
        from:[from,[Validators.required,Validators.minLength(1)]],
        to:[to,[Validators.required,Validators.minLength(1)]]
      }
    )as FormGroup;
  }

}

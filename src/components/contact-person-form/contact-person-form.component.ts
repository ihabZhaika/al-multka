import {Component , Input , OnInit} from '@angular/core';
import {FormGroup , FormArray , FormControl , Validators , FormBuilder} from "@angular/forms";
import {ContactPerson} from "../../models/contact-person/contact-person.interface";
import {PhoneNumber} from "../../models/contact-person/phone-number.interface";

@Component({
             selector: 'contact-person-form',
             templateUrl: 'contact-person-form.component.html'
           })
export class ContactPersonFormComponent implements OnInit
{

  public contactPersonForm:FormGroup;
  @Input() public  formArray:FormArray;
  @Input('isEditable') public isEditable:boolean;
  @Input('model') public contactPerson:ContactPerson;

  ngOnInit() : void
  {
    this.contactPersonForm = this.initFormContactPerson(this.contactPerson);
    this.formArray.push(this.contactPersonForm);
  }
  constructor(private _fb: FormBuilder)
  {
    console.log("Added contact");
  }

  public removePhone(j:number)
  {
    (this.contactPersonForm.get("phones") as FormArray).removeAt(j);
  }
  public initFormPhone(phoneNumber?:PhoneNumber):FormGroup
  {
    let prefix = "+972";
    let number = "";
    if(phoneNumber)
    {
      prefix = phoneNumber.prefix;
      number = phoneNumber.number
    }
    return new FormGroup(
      {
        prefix:new FormControl(prefix, [ <any>Validators.required]),
        number:new FormControl(number, [<any>Validators.required])
      }
    );
    // return new FormControl(phone || '',[Validators.minLength(6), <any>Validators.required]);
  }

  public addPhoneNumber()
  {
    let phones:FormArray = <FormArray>this.contactPersonForm.controls["phones"];
    phones.push(this.initFormPhone());
  }

  initFormContactPerson(contactPerson?:ContactPerson):FormGroup
  {
    let name = '';
    let phones = [this.initFormPhone()];
    if(contactPerson)
    {
      name= contactPerson.name;
      phones =Array.apply(null, Array(contactPerson.phones.length)).map((val,index)=>{return this.initFormPhone(contactPerson.phones[index])});
    }

    return this._fb.group(
      {
        name:[name,[<any>Validators.required, <any>Validators.minLength(1)]],
        phones:this._fb.array(phones)
      }
    )as FormGroup
  }

}

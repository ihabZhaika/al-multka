import {FormControl , ValidationErrors} from "@angular/forms";
export class ValidatorUtils
{
  static nonEmpty(control : FormControl)
  {
    console.log(control.value );
    if (!control.value || control.value.length === 0)
    {
      console.log("Not valid");
      return <ValidationErrors>{validateDate:{
        valid: false
      } };
    }
    console.log("valid");

    return null;
  }
}

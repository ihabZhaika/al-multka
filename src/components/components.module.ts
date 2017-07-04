/**
 * Created by ihab on 6/30/17.
 */
import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {LoginComponent} from "./login/login.component";
import {PlaceComponent} from "./place/place.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactPersonFormComponent} from "./contact-person-form/contact-person-form.component";
@NgModule(
  {
    declarations:[LoginComponent,PlaceComponent,ContactPersonFormComponent],
    imports : [IonicModule,ReactiveFormsModule],
    exports:[LoginComponent,PlaceComponent,ContactPersonFormComponent,ReactiveFormsModule]
  }
)
export class ComponentsModule
{

}

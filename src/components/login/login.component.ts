import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth.provider";
import {UserProvider} from "../../providers/user/user.provider";
import {Role} from "../../models/role/role.enum";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
             selector: 'app-login',
             templateUrl: 'login.component.html'
           })
export class LoginComponent {

  phoneNumber: string;
  constructor( public alertCtrl:AlertController,private auth:AuthProvider,private userProvider:UserProvider)
  {


  }

  saveUser()
  {
    // console.log(    this.userProvider.createSura({fullName:"ihab zhaika",
    //                                                address:"abx",
    //                                              birthData:new Date(),
    //                                              gender:Gender.ذكور,
    //                                              phone:"0532809974",
    //                                              role:Role.admin,
    //                                              permissions:[]}));
  }

  signIn()
  {
    this.auth.signWithPhone(this.phoneNumber).subscribe((res)=>
                                                        {
                                                          console.log(res);
                                                          let prompt = this.alertCtrl.create({
                                                                                               title: 'Enter the Confirmation code',
                                                                                               inputs: [{ name: 'confirmationCode', placeholder: 'ادخل رقم التفعيل' }],
                                                                                               buttons: [
                                                                                                 { text: 'الغاء',
                                                                                                   handler: data => { console.log('Cancel clicked'); }
                                                                                                 },
                                                                                                 { text: 'تأكيد',
                                                                                                   handler: data =>
                                                                                                   {
                                                                                                     if(data.confirmationCode === res.smsCode)
                                                                                                     {
                                                                                                       // get the userId from Firebase
                                                                                                        this.auth.authenticateUser(this.phoneNumber);
                                                                                                     }
                                                                                                     else
                                                                                                     {

                                                                                                     }
                                                                                                   }
                                                                                                 }
                                                                                               ]
                                                                                             });
                                                          prompt.present();
                                                        },
                                                        (err)=>
                                                        {
                                                          console
                                                        });

  }

}

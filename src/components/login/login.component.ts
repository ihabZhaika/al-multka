import {Component , EventEmitter , Output} from "@angular/core";
import {AlertController , AlertOptions} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth.provider";
import {UserProvider} from "../../providers/user/user.provider";
import {Role} from "../../models/role/role.enum";
import {User} from "../../models/User/user.interface";
import {Observable} from "rxjs";
import {SupervisorProvider} from "../../providers/supervisor/supervisor.provider";

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
  @Output()
  loginStatus:EventEmitter<boolean>;
  constructor( public alertCtrl:AlertController,public auth:AuthProvider,private supervisorsProvider:SupervisorProvider)
  {
    this.loginStatus = new EventEmitter<boolean>();

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
    this.auth.signWithPhone(this.phoneNumber).flatMap((objects:User[])=>
                                                      {
                                                        if(objects.length == 0)
                                                        {
                                                          return Observable.throw({title:"رقم الهاتف غير صالح"});
                                                        }
                                                        if(objects.length > 1)
                                                        {
                                                          return Observable.throw({title:"هنالك" +
                                                                                         " اكثر" +
                                                                                         " من" +
                                                                                         " مستخدم" +
                                                                                         " بنفس الهاتف, نواصل مع المسؤل"});

                                                        }
                                                        return this.supervisorsProvider.getById(objects[0]._id);
                                                      }).subscribe(user=>
                                                                   {
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
                                                                                                                console.log(data);
                                                                                                                if(data.confirmationCode === '8712')
                                                                                                                {
                                                                                                                  console.log("Authenticated");
                                                                                                                  // get the userId from Firebase
                                                                                                                  this.auth.authenticateUser(user);
                                                                                                                  this.loginStatus.emit(true);
                                                                                                                }
                                                                                                                else
                                                                                                                {
                                                                                                                  this.loginStatus.emit(false);
                                                                                                                  this.alertCtrl.create({title:"رمز الدخول خطأ",
                                                                                                                                          buttons: [
                                                                                                                                            { text: 'حسنا',
                                                                                                                                              handler: data => { console.log('Cancel x'); }

                                                                                                                                            }]}) .present();
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          ]
                                                                                                        });
                                                                     prompt.present();
                                                                   },
                                                                   (err)=>
                                                                   {

                                                                     this.loginStatus.emit(false);
                                                                     if(err.title)
                                                                     {
                                                                       this.alertCtrl.create({title:err.title,
                                                                                               buttons: [
                                                                                                 { text: 'اغلاف',
                                                                                                   handler: data => { console.error(err.title); }

                                                                                                 }]}) .present();
                                                                     }
                                                                     else
                                                                     {
                                                                       console.error(err);
                                                                     }

                                                                   });

  }

}

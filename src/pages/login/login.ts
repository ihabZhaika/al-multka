import { Component } from '@angular/core';
import {IonicPage , NavController , NavParams , ToastController} from 'ionic-angular';
import {PageNameInjector} from "../../decorators/page-name-injector.decorator";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
             selector: 'page-login',
             templateUrl: 'login.html',
           })
@PageNameInjector("LoginPage")
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toasController:ToastController)
  {
  }

  login(isLoggedIn:boolean)
  {

    console.log("Login Page");
    if (isLoggedIn)
    {
      this.toasController.create({
                                   message:"تم تسجيل الدخول بنجاح",
                                   duration:3000
                                 }).present();
      this.navCtrl.setRoot('TabsPage');
    }
    // else
    // {
    //   this.toasController.create({
    //                                message:"لم يتم تسجيل الدخول بنجاح",
    //                                duration:3000
    //                              }).present();
    // }

  }

}

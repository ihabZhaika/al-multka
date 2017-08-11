import {Component , ViewChild} from '@angular/core';
import { Nav, Platform ,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PagesNames} from "../config/pages-name";
import {AuthProvider} from "../providers/auth/auth.provider";
import {BackandService} from "@backand/angular2-sdk/src/backand.service";
import {BACKEND_CONFIG} from "../config/backend.config";
import {MockDataProvider} from "../providers/mock-data/mock-data.provider";
import {Permission} from "../models/permission/permission.interface";
import {User} from "../models/User/user.interface";
import {Role} from "../models/role/role.enum";
import {KEYS} from "../config/config.keys";
@Component({
             templateUrl: 'app.html'
           })
export class MyApp {
  rootPage:string = "TabsPage";
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  isLoggedIn:boolean;
  pagesPermissions:Map<string,Permission>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController, private auth:AuthProvider,private mockDataProvider:MockDataProvider)
  {
    this.pagesPermissions = new Map();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: PagesNames.StatisticsPage, component: "StatisticsPage"},
      { title: PagesNames.ProfilePage, component: "ProfilePage"},
      { title: PagesNames.InboxPage, component: "InboxPage"},
      { title: PagesNames.EventsPage, component:  "EventsPage"},
      { title: PagesNames.MessagingPage, component:  "MessagingPage"},
      { title: PagesNames.CoursesPage, component:  "CoursesPage"},
      { title: PagesNames.SupervisorsPage, component: "SupervisorsPage"},
      { title: PagesNames.PupilsPage, component:  "PupilsPage"},
      { title: PagesNames.ParentsPage, component: "ParentsPage"},
      { title: PagesNames.PlacesPage, component:  "PlacesPage"},
      { title: PagesNames.GroupsPage, component:  "GroupsPage"},
      { title: PagesNames.PartsPage, component:  "PartsPage"},
      { title: PagesNames.SurasPage, component:  "SurasPage"},
      { title: PagesNames.SettingsPage, component:  "SettingsPage"},
      { title: PagesNames.LogsPage, component:  "LogsPage"},

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // mockDataProvider.deleteMockData().flatMap(()=>mockDataProvider.insertMockData()).subscribe(
      //   value=>
      //   {
      //     console.log(value);
          this.auth.authStatus.subscribe(value=>
                                         {
                                           this.isLoggedIn = value;
                                           if(!value)
                                           {
                                             console.log("Stopped");
                                             return;
                                           }
                                           console.log("From app:",value);
                                           let userId = this.auth.getSessionUserId();
                                           if(userId)
                                           {
                                             this.auth.getSessionUser(userId).subscribe(
                                               (user:User)=>
                                               {
                                                 console.log("Fetched the user");
                                                 //update the user
                                                 if(!user)
                                                 {
                                                   this.auth.logout();
                                                   return;
                                                 }
                                                 this.auth.user=user;
                                                 console.log("The session user is",user);
                                                 if(user.role == Role.admin)
                                                 {
                                                   this.pages.forEach(value=>
                                                                      {
                                                                        this.pagesPermissions.set(
                                                                          value.component,
                                                                          {create:true,
                                                                            erase:true,
                                                                            read:true,
                                                                            update:true,
                                                                            pageName:value.component});

                                                                      });
                                                 }
                                                 else
                                                 {
                                                   // get the permissions
                                                   user.permissions.forEach((value:Permission)=>
                                                                            {
                                                                              this.pagesPermissions.set(value.pageName,value);
                                                                            });
                                                 }



                                                 console.log("Updated pages permission");

                                               },
                                               error=>
                                               {
                                                 console.error(error);
                                                 this.auth.logout();

                                               }
                                             );
                                           }
                                           // user id has problem
                                           else
                                           {
                                             this.auth.logout();
                                           }
                                         },
                                         error=>
                                         {
                                           console.error("From app:",error);

                                         });
          // trigger the check of the session validation
          this.auth.validateSession();

      //   },
      //   err=>
      //   {
      //     // window.prompt(JSON.stringify(err));
      //     console.log(err);
      //
      //   }
      // )
    });
  }
  openPage(page)
  {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page,{[KEYS.PERMISSION_KEY]:this.pagesPermissions.get(page)});
    this.menuCtrl.close();

  }
  canView(pageName):boolean
  {
    return (this.pagesPermissions.has(pageName) && this.pagesPermissions.get(pageName).read);
  }

}


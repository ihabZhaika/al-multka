import {Component , ViewChild} from '@angular/core';
import { Nav, Platform ,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PagesNames} from "../config/pages-name";
import {AuthProvider} from "../providers/auth/auth.provider";
import {BackandService} from "@backand/angular2-sdk/src/backand.service";
import {BACKEND_CONFIG} from "../config/backend.config";
import {MockDataProvider} from "../providers/mock-data/mock-data.provider";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "TabsPage";
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  isLoggedIn:boolean;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController, private auth:AuthProvider,private mockDataProvider:MockDataProvider)
  {
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

      mockDataProvider.deleteMockData().flatMap(()=>mockDataProvider.insertMockData()).subscribe(
        value=>
        {
          console.log(value);
          this.auth.authStatus.subscribe(value=>
                                                           {
                                                             this.isLoggedIn = value;
                                                             console.log("From app:",value);
                                                           },
          error=>
          {
            console.error("From app:",error);

          });
          this.auth.checkAuthentication();
        },
        err=>
        {
          // window.prompt(JSON.stringify(err));
          console.log(err);

        }
      )
    });
  }
  openPage(page)
  {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page);
    this.menuCtrl.close();

  }

}


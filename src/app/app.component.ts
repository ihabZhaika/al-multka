import {Component , ViewChild} from '@angular/core';
import { Nav, Platform ,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PagesNames} from "../config/pages-name";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "TabsPage";
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  temp=true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController)
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
      statusBar.styleDefault();
      splashScreen.hide();
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


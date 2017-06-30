import {Component , ViewChild} from '@angular/core';
import { Nav, Platform ,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "TabsPage";
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  temp=false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController)
  {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الاحصائيات', component: "StatisticsPage"},
      { title: 'الملف الشخصي', component: "ProfilePage"},
      { title: 'صندوق الوارد', component: "InboxPage"},
      { title: 'الأحداث', component:  "EventsPage"},
      { title: 'المراسلات', component:  "MessagingPage"},
      { title: 'الدورات', component:  "CoursesPage"},
      { title: 'المشرفين', component: "SupervisorsPage"},
      { title: 'التلاميذ', component:  "PupilsPage"},
      { title: 'الأهل', component: "ParentsPage"},
      { title: 'الأماكن', component:  "PlacesPage"},
      { title: 'المجموعات', component:  "GroupsPage"},
      { title: 'الاجزاء', component:  "PartsPage"},
      { title: 'السور', component:  "SurasPage"},
      { title: 'الأعدادات', component:  "SettingsPage"},
      { title: 'السجلات', component:  "LogsPage"},

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
    this.nav.push(page.component);
    this.menuCtrl.close();

  }
}


import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler , NgModule} from "@angular/core";
import {IonicApp , IonicErrorHandler , IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {AngularFireDatabase} from "angularfire2/database/database";
import {MyApp} from "./app.component";
import {AuthProvider} from "../providers/auth/auth.provider";
import {HttpModule} from "@angular/http";
import {UserProvider} from "../providers/user/user.provider";
import {PlaceProvider} from "../providers/place/place.provider";
import {BackandService} from "@backand/angular2-sdk/src/backand.service";
import {AngularFireModule} from "angularfire2";
import io from 'socket.io-client';
import {FIREBASE_CONFIG} from "../config/firebase.config";
import { PupilComponent } from '../components/pupil/pupil';
window["io"] = io;
@NgModule({
  declarations: [
    MyApp,
    PupilComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    HttpModule
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackandService,
    AuthProvider,
    UserProvider,
    AngularFireDatabase,
    PlaceProvider,
  ]
})
export class AppModule {}

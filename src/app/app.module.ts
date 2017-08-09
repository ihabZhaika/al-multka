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
import io from "socket.io-client";
import {PupilProvider} from "../providers/pupil/pupil.provider";
import {CourseProvider} from "../providers/course/course.provider";
import {ComponentsModule} from "../components/components.module";
import {SuraProvider} from "../providers/sura/sura.provider";
import {PartProvider} from "../providers/part/part.provider";
import {MultiItemSelectModalPage} from "../pages/multi-item-select-modal/multi-item-select-modal";
import {MultiItemSelectModalPageModule} from "../pages/multi-item-select-modal/multi-item-select-modal.module";
import {MockDataProvider} from "../providers/mock-data/mock-data.provider";
import { ItemsListComponent } from '../components/items-list/items-list';
window["io"] = io;
@NgModule({
            declarations:
              [
              MyApp
              ],
            imports: [
              BrowserModule,
              IonicModule.forRoot(MyApp,
                                  {
                                    dayNames: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],

                                  }),
              ComponentsModule,
              HttpModule,
              MultiItemSelectModalPageModule

            ],
            bootstrap: [IonicApp],
            entryComponents:
              [
                MyApp,MultiItemSelectModalPage
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
              PupilProvider,
              CourseProvider,
              SuraProvider,
              PartProvider,
              MockDataProvider
            ]
          })
export class AppModule {}

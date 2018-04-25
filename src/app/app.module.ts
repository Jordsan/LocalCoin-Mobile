import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { TransactionPage } from '../pages/transaction/transaction';

import { TransactionProvider } from '../providers/transaction/transaction';
import { UserProvider } from '../providers/user/user';



@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        HomePage,
        ProfilePage,
        TransactionPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        HomePage,
        ProfilePage,
        TransactionPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        TransactionProvider,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    TransactionProvider,
    UserProvider
    ]
})
export class AppModule { }

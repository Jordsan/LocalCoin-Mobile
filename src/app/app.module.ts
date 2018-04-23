import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactPage } from '../pages/transact/transact';
import { ManualTransactionPage } from '../pages/manual-transaction/manual-transaction';
import { FastTransactionPage } from '../pages/fast-transaction/fast-transaction';

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        HomePage,
        TransactPage,
        ProfilePage,
        ManualTransactionPage,
        FastTransactionPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        HomePage,
        ProfilePage,
        TransactPage,
        ManualTransactionPage,
        FastTransactionPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

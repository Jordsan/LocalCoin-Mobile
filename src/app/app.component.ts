import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NFC, Ndef } from '@ionic-native/nfc';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
        private events: Events, private nfc: NFC, private ndef: Ndef) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            nfc.enabled().then(this.nfcEnabledSuccess).catch(this.nfcEnabledFailure);
        });
    }

    nfcEnabledSuccess() {
        this.nfc.addNdefListener(() => {
            console.log('successfully attached ndef listener');
        }, (err) => {
            console.log('error attaching ndef listener', err);
        }).subscribe((data) => {
            if (data && data.tag && data.tag.id) {
                if (data.tag.ndefMessage) {
                    let payload = data.tag.ndefMessage[0].payload;
                    let tagContent = this.nfc.bytesToString(payload);
                    console.log(tagContent);

                    this.events.publish('nfc-wallet-received', tagContent);
                }
            }
        });
    }

    /*
    put this in the part of transactions where detecting nfc tags
            let message = [
                this.ndef.textRecord('hello, world', 'English', [])
            ];
            this.nfc.share([message]).then(() => {
                console.log('share success');
            }).catch(() => {
                console.log('share error');
            });
    */

    nfcEnabledFailure() {
        console.log('NFC Not Enabled');
    }
}


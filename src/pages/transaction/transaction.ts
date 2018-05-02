import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { NFC, Ndef } from '@ionic-native/nfc';


@IonicPage()
@Component({
    selector: 'page-transaction',
    templateUrl: 'transaction.html',
})
export class TransactionPage {

    toAddress: string;
    amount: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public userProvider: UserProvider,
        private events: Events, private nfc: NFC, private ndef: Ndef) {
            this.events.subscribe('nfc-wallet-received', (data) => {
                this.toAddress = data;
            });
    }

    ionViewDidLoad(): void {
        console.log('transaction page opened');

        this.nfc.enabled().then(() => {
            let message = [
                // this.ndef.textRecord(this.userProvider.getCurrUser(), 'English', [])
                this.ndef.textRecord('test2', 'English', [])

            ];
            this.nfc.share([message]).then(() => {
                console.log('share success');
            }).catch(() => {
                console.log('share error');
            });
        })
        .catch(() => {
            console.log('NFC Not Enabled');
        });
        
    }

    back(): void {
        this.navCtrl.pop();
    }

    send(): void {
        this.viewCtrl.dismiss({ from: this.userProvider.getCurrUser(), to: this.toAddress, amount: parseFloat(this.amount) });
    }

}

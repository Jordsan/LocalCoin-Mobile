import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-manual-transaction',
    templateUrl: 'manual-transaction.html',
})
export class ManualTransactionPage {

    toAddress: string;
    amount: number;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController) {
    }
    
    back(): void {
        this.navCtrl.pop();
    }

    send(): void {
        this.viewCtrl.dismiss({ toAddress: this.toAddress, amount: this.amount });
    }

}

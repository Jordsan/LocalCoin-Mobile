import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-fast-transaction',
    templateUrl: 'fast-transaction.html',
})
export class FastTransactionPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    back(): void {
        this.navCtrl.pop();
    }

    send(): void {
        console.log("Begin NFC transaction here");
    }

}

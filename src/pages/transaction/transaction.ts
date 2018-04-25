import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
    selector: 'page-transaction',
    templateUrl: 'transaction.html',
})
export class TransactionPage {

    toAddress: string;
    amount: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public userProvider: UserProvider) {
    }

    back(): void {
        this.navCtrl.pop();
    }

    send(): void {
        this.viewCtrl.dismiss({ from: this.userProvider.getCurrUser(), to: this.toAddress, amount: parseFloat(this.amount) });
    }

}

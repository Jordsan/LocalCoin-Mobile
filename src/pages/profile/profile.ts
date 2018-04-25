import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
    }

    getBalance() {
        return this.userProvider.balance;
    }

    getWalletAddress(): string {
        return this.userProvider.currUser;
    }
}

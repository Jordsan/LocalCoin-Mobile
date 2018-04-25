import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ProfilePage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
    }

    updateBalance(): void {
        this.userProvider.getBalance();
    }

}

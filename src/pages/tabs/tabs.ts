import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TransactionPage } from '../transaction/transaction';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = TransactionPage;
    tab3Root = ProfilePage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

}

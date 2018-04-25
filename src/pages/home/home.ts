import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TransactionProvider } from '../../providers/transaction/transaction';
import { TransactionPage } from '../transaction/transaction';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
        public transactionProvider: TransactionProvider) {
    }

    openTransactionModal(): void {
        let modal = this.modalCtrl.create(TransactionPage);
        modal.present();

        modal.onDidDismiss((data: any) => {
            this.send(data);
        })
    }


    send(data: any): void {
        if (data !== undefined) {
            console.log("data", data);
            this.transactionProvider.sendTransaction(data);
        }
    }

}


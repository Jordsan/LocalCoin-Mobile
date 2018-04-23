import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ManualTransactionPage } from '../manual-transaction/manual-transaction';
import { FastTransactionPage } from '../fast-transaction/fast-transaction';

@IonicPage()
@Component({
    selector: 'page-transact',
    templateUrl: 'transact.html',
})
export class TransactPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    openManualTransactionModal(): void {
        let modal = this.modalCtrl.create(ManualTransactionPage);
        modal.present();

        modal.onDidDismiss((data: any) => {
            this.send(data);
        })
    }

    openFastTransactionModal(): void {
        let modal = this.modalCtrl.create(FastTransactionPage);
        modal.present();

        modal.onDidDismiss((data: any) => {
            this.send(data);
        })
    }

    send(data: any): void {
        if (data !== undefined) {
            console.log("data", data);
        }
    }

}


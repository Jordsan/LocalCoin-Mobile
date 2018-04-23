import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastTransactionPage } from './fast-transaction';

@NgModule({
  declarations: [
    FastTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(FastTransactionPage),
  ],
})
export class FastTransactionPageModule {}

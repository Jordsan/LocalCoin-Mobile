import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualTransactionPage } from './manual-transaction';

@NgModule({
  declarations: [
    ManualTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualTransactionPage),
  ],
})
export class ManualTransactionPageModule {}

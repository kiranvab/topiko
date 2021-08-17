import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQrPaymentsPageRoutingModule } from './add-qr-payments-routing.module';

import { AddQrPaymentsPage } from './add-qr-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQrPaymentsPageRoutingModule
  ],
  declarations: [AddQrPaymentsPage]
})
export class AddQrPaymentsPageModule {}

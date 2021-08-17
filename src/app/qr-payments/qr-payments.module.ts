import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPaymentsPageRoutingModule } from './qr-payments-routing.module';

import { QrPaymentsPage } from './qr-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPaymentsPageRoutingModule
  ],
  declarations: [QrPaymentsPage]
})
export class QrPaymentsPageModule {}

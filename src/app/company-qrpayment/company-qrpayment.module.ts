import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyQrpaymentPageRoutingModule } from './company-qrpayment-routing.module';

import { CompanyQrpaymentPage } from './company-qrpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyQrpaymentPageRoutingModule
  ],
  declarations: [CompanyQrpaymentPage]
})
export class CompanyQrpaymentPageModule {}

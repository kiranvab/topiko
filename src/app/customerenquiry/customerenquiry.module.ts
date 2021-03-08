import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerenquiryPageRoutingModule } from './customerenquiry-routing.module';

import { CustomerenquiryPage } from './customerenquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerenquiryPageRoutingModule
  ],
  declarations: [CustomerenquiryPage]
})
export class CustomerenquiryPageModule {}

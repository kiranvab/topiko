import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallenquiryPageRoutingModule } from './callenquiry-routing.module';

import { CallenquiryPage } from './callenquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallenquiryPageRoutingModule
  ],
  declarations: [CallenquiryPage]
})
export class CallenquiryPageModule {}

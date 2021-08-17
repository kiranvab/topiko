import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQrReachPageRoutingModule } from './add-qr-reach-routing.module';

import { AddQrReachPage } from './add-qr-reach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQrReachPageRoutingModule
  ],
  declarations: [AddQrReachPage]
})
export class AddQrReachPageModule {}

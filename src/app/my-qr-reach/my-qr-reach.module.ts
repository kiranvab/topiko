import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';
import { MyQrReachPageRoutingModule } from './my-qr-reach-routing.module';

import { MyQrReachPage } from './my-qr-reach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    MyQrReachPageRoutingModule
  ],
  declarations: [MyQrReachPage]
})
export class MyQrReachPageModule {}

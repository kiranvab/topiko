import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';

import { QrReachViewPageRoutingModule } from './qr-reach-view-routing.module';

import { QrReachViewPage } from './qr-reach-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrReachViewPageRoutingModule
  ],
  declarations: [QrReachViewPage]
})
export class QrReachViewPageModule {}

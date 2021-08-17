import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrreachPageRoutingModule } from './qrreach-routing.module';

import { QrreachPage } from './qrreach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrreachPageRoutingModule
  ],
  declarations: [QrreachPage]
})
export class QrreachPageModule {}

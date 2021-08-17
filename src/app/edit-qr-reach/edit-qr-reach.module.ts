import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditQrReachPageRoutingModule } from './edit-qr-reach-routing.module';

import { EditQrReachPage } from './edit-qr-reach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditQrReachPageRoutingModule
  ],
  declarations: [EditQrReachPage]
})
export class EditQrReachPageModule {}

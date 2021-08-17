import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersnearyouPageRoutingModule } from './offersnearyou-routing.module';

import { OffersnearyouPage } from './offersnearyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersnearyouPageRoutingModule
  ],
  declarations: [OffersnearyouPage]
})
export class OffersnearyouPageModule {}

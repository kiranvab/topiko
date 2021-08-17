import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesnearyouPageRoutingModule } from './servicesnearyou-routing.module';

import { ServicesnearyouPage } from './servicesnearyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesnearyouPageRoutingModule
  ],
  declarations: [ServicesnearyouPage]
})
export class ServicesnearyouPageModule {}

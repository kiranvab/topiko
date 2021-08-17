import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopsnearyouPageRoutingModule } from './shopsnearyou-routing.module';

import { ShopsnearyouPage } from './shopsnearyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopsnearyouPageRoutingModule
  ],
  declarations: [ShopsnearyouPage]
})
export class ShopsnearyouPageModule {}

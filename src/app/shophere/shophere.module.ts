import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopherePageRoutingModule } from './shophere-routing.module';

import { ShopherePage } from './shophere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopherePageRoutingModule
  ],
  declarations: [ShopherePage]
})
export class ShopherePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopHerePageRoutingModule } from './shop-here-routing.module';

import { ShopHerePage } from './shop-here.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopHerePageRoutingModule
  ],
  declarations: [ShopHerePage]
})
export class ShopHerePageModule {}

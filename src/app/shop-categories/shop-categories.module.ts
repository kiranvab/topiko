import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCategoriesPageRoutingModule } from './shop-categories-routing.module';

import { ShopCategoriesPage } from './shop-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCategoriesPageRoutingModule
  ],
  declarations: [ShopCategoriesPage]
})
export class ShopCategoriesPageModule {}

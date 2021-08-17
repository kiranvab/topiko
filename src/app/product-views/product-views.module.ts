import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductViewsPageRoutingModule } from './product-views-routing.module';

import { ProductViewsPage } from './product-views.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductViewsPageRoutingModule
  ],
  declarations: [ProductViewsPage]
})
export class ProductViewsPageModule {}

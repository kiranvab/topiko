import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinesscategoryPageRoutingModule } from './businesscategory-routing.module';

import { BusinesscategoryPage } from './businesscategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinesscategoryPageRoutingModule
  ],
  declarations: [BusinesscategoryPage]
})
export class BusinesscategoryPageModule {}

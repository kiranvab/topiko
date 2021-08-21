import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcategoryPageRoutingModule } from './gcategory-routing.module';

import { GcategoryPage } from './gcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcategoryPageRoutingModule
  ],
  declarations: [GcategoryPage]
})
export class GcategoryPageModule {}

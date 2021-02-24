import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcategoryPageRoutingModule } from './selectcategory-routing.module';

import { SelectcategoryPage } from './selectcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcategoryPageRoutingModule
  ],
  declarations: [SelectcategoryPage]
})
export class SelectcategoryPageModule {}

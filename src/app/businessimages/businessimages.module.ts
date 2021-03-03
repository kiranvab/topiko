import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessimagesPageRoutingModule } from './businessimages-routing.module';

import { BusinessimagesPage } from './businessimages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessimagesPageRoutingModule
  ],
  declarations: [BusinessimagesPage]
})
export class BusinessimagesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinesstimePageRoutingModule } from './businesstime-routing.module';

import { BusinesstimePage } from './businesstime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinesstimePageRoutingModule
  ],
  declarations: [BusinesstimePage]
})
export class BusinesstimePageModule {}

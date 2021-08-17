import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareerviewPageRoutingModule } from './careerview-routing.module';

import { CareerviewPage } from './careerview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareerviewPageRoutingModule
  ],
  declarations: [CareerviewPage]
})
export class CareerviewPageModule {}

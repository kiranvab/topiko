import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessesServicePageRoutingModule } from './businesses-service-routing.module';

import { BusinessesServicePage } from './businesses-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessesServicePageRoutingModule
  ],
  declarations: [BusinessesServicePage]
})
export class BusinessesServicePageModule {}

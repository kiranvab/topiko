import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessViewsPageRoutingModule } from './business-views-routing.module';

import { BusinessViewsPage } from './business-views.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessViewsPageRoutingModule
  ],
  declarations: [BusinessViewsPage]
})
export class BusinessViewsPageModule {}

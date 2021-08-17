import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceViewsPageRoutingModule } from './service-views-routing.module';

import { ServiceViewsPage } from './service-views.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceViewsPageRoutingModule
  ],
  declarations: [ServiceViewsPage]
})
export class ServiceViewsPageModule {}

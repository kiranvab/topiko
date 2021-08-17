import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceCategoriesPageRoutingModule } from './service-categories-routing.module';

import { ServiceCategoriesPage } from './service-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceCategoriesPageRoutingModule
  ],
  declarations: [ServiceCategoriesPage]
})
export class ServiceCategoriesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectservicePageRoutingModule } from './selectservice-routing.module';

import { SelectservicePage } from './selectservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectservicePageRoutingModule
  ],
  declarations: [SelectservicePage]
})
export class SelectservicePageModule {}

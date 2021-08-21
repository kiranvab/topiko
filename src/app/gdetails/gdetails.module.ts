import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GdetailsPageRoutingModule } from './gdetails-routing.module';

import { GdetailsPage } from './gdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GdetailsPageRoutingModule
  ],
  declarations: [GdetailsPage]
})
export class GdetailsPageModule {}

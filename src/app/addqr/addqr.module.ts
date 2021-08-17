import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddqrPageRoutingModule } from './addqr-routing.module';

import { AddqrPage } from './addqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddqrPageRoutingModule
  ],
  declarations: [AddqrPage]
})
export class AddqrPageModule {}

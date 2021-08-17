import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddValuePageRoutingModule } from './add-value-routing.module';

import { AddValuePage } from './add-value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddValuePageRoutingModule
  ],
  declarations: [AddValuePage]
})
export class AddValuePageModule {}

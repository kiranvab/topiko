import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalcardPageRoutingModule } from './digitalcard-routing.module';

import { DigitalcardPage } from './digitalcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalcardPageRoutingModule
  ],
  declarations: [DigitalcardPage]
})
export class DigitalcardPageModule {}

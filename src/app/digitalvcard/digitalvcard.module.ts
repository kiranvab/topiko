import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalvcardPageRoutingModule } from './digitalvcard-routing.module';

import { DigitalvcardPage } from './digitalvcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalvcardPageRoutingModule
  ],
  declarations: [DigitalvcardPage]
})
export class DigitalvcardPageModule {}

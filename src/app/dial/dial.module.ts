import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialPageRoutingModule } from './dial-routing.module';

import { DialPage } from './dial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialPageRoutingModule
  ],
  declarations: [DialPage]
})
export class DialPageModule {}

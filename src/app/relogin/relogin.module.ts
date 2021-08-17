import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReloginPageRoutingModule } from './relogin-routing.module';

import { ReloginPage } from './relogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReloginPageRoutingModule
  ],
  declarations: [ReloginPage]
})
export class ReloginPageModule {}

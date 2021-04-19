import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedvcPageRoutingModule } from './createdvc-routing.module';

import { CreatedvcPage } from './createdvc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedvcPageRoutingModule
  ],
  declarations: [CreatedvcPage]
})
export class CreatedvcPageModule {}

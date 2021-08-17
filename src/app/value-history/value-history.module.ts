import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValueHistoryPageRoutingModule } from './value-history-routing.module';

import { ValueHistoryPage } from './value-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValueHistoryPageRoutingModule
  ],
  declarations: [ValueHistoryPage]
})
export class ValueHistoryPageModule {}

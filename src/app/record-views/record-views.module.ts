import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordViewsPageRoutingModule } from './record-views-routing.module';

import { RecordViewsPage } from './record-views.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordViewsPageRoutingModule
  ],
  declarations: [RecordViewsPage]
})
export class RecordViewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBusinessPageRoutingModule } from './edit-business-routing.module';

import { EditBusinessPage } from './edit-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBusinessPageRoutingModule
  ],
  declarations: [EditBusinessPage]
})
export class EditBusinessPageModule {}

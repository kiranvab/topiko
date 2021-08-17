import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditshowcasePageRoutingModule } from './editshowcase-routing.module';

import { EditshowcasePage } from './editshowcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditshowcasePageRoutingModule
  ],
  declarations: [EditshowcasePage]
})
export class EditshowcasePageModule {}

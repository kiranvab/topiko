import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdvdetailsPageRoutingModule } from './editdvdetails-routing.module';

import { EditdvdetailsPage } from './editdvdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdvdetailsPageRoutingModule
  ],
  declarations: [EditdvdetailsPage]
})
export class EditdvdetailsPageModule {}

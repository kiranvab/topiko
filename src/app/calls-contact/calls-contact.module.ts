import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsContactPageRoutingModule } from './calls-contact-routing.module';

import { CallsContactPage } from './calls-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsContactPageRoutingModule
  ],
  declarations: [CallsContactPage]
})
export class CallsContactPageModule {}

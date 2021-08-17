import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyChatsPageRoutingModule } from './company-chats-routing.module';

import { CompanyChatsPage } from './company-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyChatsPageRoutingModule
  ],
  declarations: [CompanyChatsPage]
})
export class CompanyChatsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsContactPageRoutingModule } from './chats-contact-routing.module';

import { ChatsContactPage } from './chats-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsContactPageRoutingModule
  ],
  declarations: [ChatsContactPage]
})
export class ChatsContactPageModule {}

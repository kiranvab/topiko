import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorevcardsPageRoutingModule } from './morevcards-routing.module';

import { MorevcardsPage } from './morevcards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorevcardsPageRoutingModule
  ],
  declarations: [MorevcardsPage]
})
export class MorevcardsPageModule {}

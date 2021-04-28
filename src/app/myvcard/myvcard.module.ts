import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyvcardPageRoutingModule } from './myvcard-routing.module';

import { MyvcardPage } from './myvcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyvcardPageRoutingModule
  ],
  declarations: [MyvcardPage]
})
export class MyvcardPageModule {}

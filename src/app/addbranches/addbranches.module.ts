import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbranchesPageRoutingModule } from './addbranches-routing.module';

import { AddbranchesPage } from './addbranches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbranchesPageRoutingModule
  ],
  declarations: [AddbranchesPage]
})
export class AddbranchesPageModule {}

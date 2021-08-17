import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeGroupPageRoutingModule } from './employee-group-routing.module';

import { EmployeeGroupPage } from './employee-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeGroupPageRoutingModule
  ],
  declarations: [EmployeeGroupPage]
})
export class EmployeeGroupPageModule {}

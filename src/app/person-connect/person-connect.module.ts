import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonConnectPageRoutingModule } from './person-connect-routing.module';

import { PersonConnectPage } from './person-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonConnectPageRoutingModule
  ],
  declarations: [PersonConnectPage]
})
export class PersonConnectPageModule {}

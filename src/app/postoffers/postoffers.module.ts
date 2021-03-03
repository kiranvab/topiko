import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostoffersPageRoutingModule } from './postoffers-routing.module';

import { PostoffersPage } from './postoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostoffersPageRoutingModule
  ],
  declarations: [PostoffersPage]
})
export class PostoffersPageModule {}

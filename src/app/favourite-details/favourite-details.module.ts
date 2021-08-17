import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteDetailsPageRoutingModule } from './favourite-details-routing.module';

import { FavouriteDetailsPage } from './favourite-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteDetailsPageRoutingModule
  ],
  declarations: [FavouriteDetailsPage]
})
export class FavouriteDetailsPageModule {}

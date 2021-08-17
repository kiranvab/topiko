import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferViewsPageRoutingModule } from './offer-views-routing.module';

import { OfferViewsPage } from './offer-views.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferViewsPageRoutingModule
  ],
  declarations: [OfferViewsPage]
})
export class OfferViewsPageModule {}

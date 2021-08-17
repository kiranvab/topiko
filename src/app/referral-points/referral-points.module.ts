import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralPointsPageRoutingModule } from './referral-points-routing.module';

import { ReferralPointsPage } from './referral-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferralPointsPageRoutingModule
  ],
  declarations: [ReferralPointsPage]
})
export class ReferralPointsPageModule {}

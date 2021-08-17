import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferralPointsPage } from './referral-points.page';

const routes: Routes = [
  {
    path: '',
    component: ReferralPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralPointsPageRoutingModule {}

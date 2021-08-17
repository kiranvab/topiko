import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferViewsPage } from './offer-views.page';

const routes: Routes = [
  {
    path: '',
    component: OfferViewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferViewsPageRoutingModule {}

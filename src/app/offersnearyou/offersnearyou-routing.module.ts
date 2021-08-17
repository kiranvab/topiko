import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersnearyouPage } from './offersnearyou.page';

const routes: Routes = [
  {
    path: '',
    component: OffersnearyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersnearyouPageRoutingModule {}

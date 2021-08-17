import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQrReachPage } from './add-qr-reach.page';

const routes: Routes = [
  {
    path: '',
    component: AddQrReachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQrReachPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrReachViewPage } from './qr-reach-view.page';

const routes: Routes = [
  {
    path: '',
    component: QrReachViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrReachViewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrPaymentsPage } from './qr-payments.page';

const routes: Routes = [
  {
    path: '',
    component: QrPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPaymentsPageRoutingModule {}

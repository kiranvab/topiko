import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQrPaymentsPage } from './add-qr-payments.page';

const routes: Routes = [
  {
    path: '',
    component: AddQrPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQrPaymentsPageRoutingModule {}

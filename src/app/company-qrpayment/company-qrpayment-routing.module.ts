import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyQrpaymentPage } from './company-qrpayment.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyQrpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyQrpaymentPageRoutingModule {}

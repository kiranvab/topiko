import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerenquiryPage } from './customerenquiry.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerenquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerenquiryPageRoutingModule {}

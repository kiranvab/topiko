import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallenquiryPage } from './callenquiry.page';

const routes: Routes = [
  {
    path: '',
    component: CallenquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallenquiryPageRoutingModule {}

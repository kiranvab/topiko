import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyQrReachPage } from './my-qr-reach.page';

const routes: Routes = [
  {
    path: '',
    component: MyQrReachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyQrReachPageRoutingModule {}

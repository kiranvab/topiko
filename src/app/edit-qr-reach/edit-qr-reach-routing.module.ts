import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditQrReachPage } from './edit-qr-reach.page';

const routes: Routes = [
  {
    path: '',
    component: EditQrReachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditQrReachPageRoutingModule {}

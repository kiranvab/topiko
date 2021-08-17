import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrreachPage } from './qrreach.page';

const routes: Routes = [
  {
    path: '',
    component: QrreachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrreachPageRoutingModule {}

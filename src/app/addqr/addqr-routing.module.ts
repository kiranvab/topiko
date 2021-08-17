import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddqrPage } from './addqr.page';

const routes: Routes = [
  {
    path: '',
    component: AddqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddqrPageRoutingModule {}

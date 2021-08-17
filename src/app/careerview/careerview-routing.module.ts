import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareerviewPage } from './careerview.page';

const routes: Routes = [
  {
    path: '',
    component: CareerviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareerviewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessesServicePage } from './businesses-service.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessesServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessesServicePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceViewsPage } from './service-views.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceViewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceViewsPageRoutingModule {}

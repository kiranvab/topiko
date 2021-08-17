import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCategoriesPage } from './service-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceCategoriesPageRoutingModule {}

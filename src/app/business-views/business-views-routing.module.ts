import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessViewsPage } from './business-views.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessViewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessViewsPageRoutingModule {}

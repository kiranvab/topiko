import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductViewsPage } from './product-views.page';

const routes: Routes = [
  {
    path: '',
    component: ProductViewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductViewsPageRoutingModule {}

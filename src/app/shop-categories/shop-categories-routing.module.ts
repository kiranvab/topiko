import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCategoriesPage } from './shop-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCategoriesPageRoutingModule {}

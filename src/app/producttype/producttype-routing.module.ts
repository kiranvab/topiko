import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttypePage } from './producttype.page';

const routes: Routes = [
  {
    path: '',
    component: ProducttypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducttypePageRoutingModule {}

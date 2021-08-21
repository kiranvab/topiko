import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcategoryPage } from './gcategory.page';

const routes: Routes = [
  {
    path: '',
    component: GcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcategoryPageRoutingModule {}

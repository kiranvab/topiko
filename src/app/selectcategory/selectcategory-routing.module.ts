import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcategoryPage } from './selectcategory.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcategoryPageRoutingModule {}

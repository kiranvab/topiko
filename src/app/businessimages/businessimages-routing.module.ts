import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessimagesPage } from './businessimages.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessimagesPageRoutingModule {}

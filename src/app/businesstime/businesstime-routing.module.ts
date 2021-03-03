import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinesstimePage } from './businesstime.page';

const routes: Routes = [
  {
    path: '',
    component: BusinesstimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinesstimePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectservicePage } from './selectservice.page';

const routes: Routes = [
  {
    path: '',
    component: SelectservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectservicePageRoutingModule {}

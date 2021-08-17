import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsnearyouPage } from './shopsnearyou.page';

const routes: Routes = [
  {
    path: '',
    component: ShopsnearyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopsnearyouPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopherePage } from './shophere.page';

const routes: Routes = [
  {
    path: '',
    component: ShopherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopherePageRoutingModule {}

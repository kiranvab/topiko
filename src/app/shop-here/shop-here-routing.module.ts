import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopHerePage } from './shop-here.page';

const routes: Routes = [
  {
    path: '',
    component: ShopHerePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopHerePageRoutingModule {}

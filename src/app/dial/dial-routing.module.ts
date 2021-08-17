import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialPage } from './dial.page';

const routes: Routes = [
  {
    path: '',
    component: DialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialPageRoutingModule {}

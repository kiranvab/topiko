import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbranchesPage } from './addbranches.page';

const routes: Routes = [
  {
    path: '',
    component: AddbranchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbranchesPageRoutingModule {}

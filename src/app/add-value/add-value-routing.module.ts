import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddValuePage } from './add-value.page';

const routes: Routes = [
  {
    path: '',
    component: AddValuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddValuePageRoutingModule {}

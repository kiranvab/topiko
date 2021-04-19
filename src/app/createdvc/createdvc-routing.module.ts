import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedvcPage } from './createdvc.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedvcPageRoutingModule {}

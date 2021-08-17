import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeGroupPage } from './employee-group.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeGroupPageRoutingModule {}

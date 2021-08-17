import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentPlanPage } from './current-plan.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentPlanPageRoutingModule {}

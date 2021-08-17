import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordViewsPage } from './record-views.page';

const routes: Routes = [
  {
    path: '',
    component: RecordViewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordViewsPageRoutingModule {}

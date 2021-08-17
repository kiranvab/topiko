import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValueHistoryPage } from './value-history.page';

const routes: Routes = [
  {
    path: '',
    component: ValueHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValueHistoryPageRoutingModule {}

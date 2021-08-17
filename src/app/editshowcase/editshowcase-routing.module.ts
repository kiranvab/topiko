import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditshowcasePage } from './editshowcase.page';

const routes: Routes = [
  {
    path: '',
    component: EditshowcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditshowcasePageRoutingModule {}

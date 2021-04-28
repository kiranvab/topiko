import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditdvdetailsPage } from './editdvdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EditdvdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditdvdetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonConnectPage } from './person-connect.page';

const routes: Routes = [
  {
    path: '',
    component: PersonConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonConnectPageRoutingModule {}

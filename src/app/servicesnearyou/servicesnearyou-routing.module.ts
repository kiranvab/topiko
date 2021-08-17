import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesnearyouPage } from './servicesnearyou.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesnearyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesnearyouPageRoutingModule {}

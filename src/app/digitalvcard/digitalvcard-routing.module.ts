import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalvcardPage } from './digitalvcard.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalvcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalvcardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalcardPage } from './digitalcard.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalcardPageRoutingModule {}

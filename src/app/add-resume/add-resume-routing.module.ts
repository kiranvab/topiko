import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddResumePage } from './add-resume.page';

const routes: Routes = [
  {
    path: '',
    component: AddResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddResumePageRoutingModule {}

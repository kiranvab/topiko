import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostoffersPage } from './postoffers.page';

const routes: Routes = [
  {
    path: '',
    component: PostoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostoffersPageRoutingModule {}

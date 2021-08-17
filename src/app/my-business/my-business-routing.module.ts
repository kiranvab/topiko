import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBusinessPage } from './my-business.page';

const routes: Routes = [
  {
    path: '',
    component: MyBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBusinessPageRoutingModule {}

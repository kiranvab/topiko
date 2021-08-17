import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyChatsPage } from './company-chats.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyChatsPageRoutingModule {}

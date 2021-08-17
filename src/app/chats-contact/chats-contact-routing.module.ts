import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsContactPage } from './chats-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsContactPageRoutingModule {}

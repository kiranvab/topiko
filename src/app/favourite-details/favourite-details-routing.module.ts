import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteDetailsPage } from './favourite-details.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteDetailsPageRoutingModule {}

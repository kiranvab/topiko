import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCompanyRecordsPage } from './search-company-records.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCompanyRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCompanyRecordsPageRoutingModule {}

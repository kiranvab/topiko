import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCompanyRecordsPageRoutingModule } from './search-company-records-routing.module';

import { SearchCompanyRecordsPage } from './search-company-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCompanyRecordsPageRoutingModule
  ],
  declarations: [SearchCompanyRecordsPage]
})
export class SearchCompanyRecordsPageModule {}

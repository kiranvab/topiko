import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddResumePageRoutingModule } from './add-resume-routing.module';

import { AddResumePage } from './add-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddResumePageRoutingModule
  ],
  declarations: [AddResumePage]
})
export class AddResumePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditsupplierRoutingModule } from './editsupplier-routing.module';
import { EditsupplierComponent } from './editsupplier.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditsupplierComponent
  ],
  imports: [
    CommonModule,
    EditsupplierRoutingModule,
    sharedModule
  ]
})
export class EditsupplierModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsupplierRoutingModule } from './addsupplier-routing.module';
import { AddsupplierComponent } from './addsupplier.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddsupplierComponent
  ],
  imports: [
    CommonModule,
    AddsupplierRoutingModule,
    sharedModule
  ]
})
export class AddsupplierModule { }

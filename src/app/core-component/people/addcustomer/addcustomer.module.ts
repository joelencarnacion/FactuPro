import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcustomerRoutingModule } from './addcustomer-routing.module';
import { AddcustomerComponent } from './addcustomer.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddcustomerComponent
  ],
  imports: [
    CommonModule,
    AddcustomerRoutingModule,
    sharedModule
  ]
})
export class AddcustomerModule { }

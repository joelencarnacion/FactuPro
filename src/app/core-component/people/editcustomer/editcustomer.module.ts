import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcustomerRoutingModule } from './editcustomer-routing.module';
import { EditcustomerComponent } from './editcustomer.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditcustomerComponent
  ],
  imports: [
    CommonModule,
    EditcustomerRoutingModule,
    sharedModule
  ]
})
export class EditcustomerModule { }

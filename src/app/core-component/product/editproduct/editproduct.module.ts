import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditproductRoutingModule } from './editproduct-routing.module';
import { EditproductComponent } from './editproduct.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditproductComponent
  ],
  imports: [
    CommonModule,
    EditproductRoutingModule,
    sharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditproductModule { }

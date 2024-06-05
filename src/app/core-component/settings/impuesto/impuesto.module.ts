import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpuestoRoutingModule } from './impuesto-routing.module';


import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpuestoComponent } from './impuesto.component';

@NgModule({
  declarations: [ImpuestoComponent],
  imports: [
    CommonModule,
     ImpuestoRoutingModule,
     sharedModule,
     FormsModule,
     ReactiveFormsModule],
})
export class ImpuestoModule {}

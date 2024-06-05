import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaComponent } from './empresa.component';
import { CompanyRoutingModule } from './empresa-routing.module';

@NgModule({
  declarations: [EmpresaComponent],
  imports: [
  CommonModule,
   CompanyRoutingModule,
   sharedModule,
   FormsModule,
   ReactiveFormsModule
  ],
})
export class EmpresaModule {}

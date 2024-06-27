import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';


@NgModule({
  declarations: [CategoriaComponent],
  imports: [
   CommonModule,
   CategoriaRoutingModule,
   sharedModule,
   FormsModule,
   ReactiveFormsModule
  ],
})
export class CategoriaModule {}

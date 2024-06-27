import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { sharedModule } from 'src/app/shared/shared.module';
import { MarcaComponent } from './marca.component';
import { MarcaRoutingModule } from './marca-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarcaComponent],
  imports: [
  CommonModule,
   MarcaRoutingModule,
   sharedModule,
   FormsModule,
   ReactiveFormsModule
  ],
})
export class MarcaModule {}

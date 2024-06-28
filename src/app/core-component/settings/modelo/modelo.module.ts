import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloRoutingModule } from './modelo-routing.module';
import { ModeloComponent } from './modelo.component';


import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModeloComponent],
  imports: [CommonModule,
    ModeloRoutingModule,
     sharedModule,
     FormsModule,
   ReactiveFormsModule],
})
export class ModeloModule {}

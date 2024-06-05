import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImporttransferRoutingModule } from './importtransfer-routing.module';
import { ImporttransferComponent } from './importtransfer.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ImporttransferComponent
  ],
  imports: [
    CommonModule,
    ImporttransferRoutingModule,
    sharedModule
  ]
})
export class ImporttransferModule { }

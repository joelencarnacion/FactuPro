import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportpurchaseRoutingModule } from './importpurchase-routing.module';
import { ImportpurchaseComponent } from './importpurchase.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ImportpurchaseComponent
  ],
  imports: [
    CommonModule,
    ImportpurchaseRoutingModule,
    sharedModule
  ]
})
export class ImportpurchaseModule { }

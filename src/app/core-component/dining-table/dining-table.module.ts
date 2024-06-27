import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { DiningTableRoutingModule } from './dining-table-routing.module';
import { DiningTableComponent } from './dining-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DiningTableComponent],
  imports: [CommonModule,
    DiningTableRoutingModule,
    sharedModule,
    FormsModule,
    ReactiveFormsModule,],
  exports: [FeatherModule],
})
export class DiningTableModule {}

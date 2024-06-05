import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { TableOrdersComponent } from './table-orders.component';
import { TableOrdersRoutingModule } from './table-orders-routing.module';


@NgModule({
  declarations: [TableOrdersComponent],
  imports: [CommonModule, TableOrdersRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class TableOrdersModule {}

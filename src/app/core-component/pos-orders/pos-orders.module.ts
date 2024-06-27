import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { PosOrdersComponent } from './pos-orders.component';
import { PosOrdersRoutingModule } from './pos-orders-routing.module';


@NgModule({
  declarations: [PosOrdersComponent],
  imports: [CommonModule, PosOrdersRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class PosOrdersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class CustomersModule {}

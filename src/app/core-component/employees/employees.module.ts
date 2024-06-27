import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class EmployeesModule {}

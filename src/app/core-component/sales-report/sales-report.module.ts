import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { SalesReportComponent } from './sales-report.component';
import { SalesReportRoutingModule } from './sales-report-routing.module';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [CommonModule, SalesReportRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class SalesReportModule {}

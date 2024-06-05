import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { ItemsReportRoutingModule } from './items-report-routing.module';
import { ItemsReportComponent } from './items-report.component';


@NgModule({
  declarations: [ItemsReportComponent],
  imports: [CommonModule, ItemsReportRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class ItemsReportModule {}

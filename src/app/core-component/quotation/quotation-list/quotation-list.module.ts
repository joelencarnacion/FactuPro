import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationListRoutingModule } from './quotation-list-routing.module';
import { QuotationListComponent } from './quotation-list.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuotationListComponent],
  imports: [
    CommonModule,
    QuotationListRoutingModule,
    sharedModule,
  ],
  bootstrap: [QuotationListComponent],
})
export class QuotationListModule {}

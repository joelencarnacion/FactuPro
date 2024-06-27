import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';


@NgModule({
  declarations: [TransactionsComponent],
  imports: [CommonModule, TransactionsRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class TransactionsModule {}

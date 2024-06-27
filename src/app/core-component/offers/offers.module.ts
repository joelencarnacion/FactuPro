import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-routing.module';


@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, OffersRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class OffersModule {}

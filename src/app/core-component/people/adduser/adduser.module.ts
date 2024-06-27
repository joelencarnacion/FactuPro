import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from './adduser-routing.module';
import { AdduserComponent } from './adduser.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    AdduserRoutingModule,
    sharedModule
  ]
})
export class AdduserModule { }

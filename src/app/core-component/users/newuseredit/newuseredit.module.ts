import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewusereditRoutingModule } from './newuseredit-routing.module';
import { NewusereditComponent } from './newuseredit.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewusereditComponent
  ],
  imports: [
    CommonModule,
    NewusereditRoutingModule,
    sharedModule
  ]
})
export class NewusereditModule { }

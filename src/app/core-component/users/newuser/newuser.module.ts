import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewuserRoutingModule } from './newuser-routing.module';
import { NewuserComponent } from './newuser.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewuserComponent
  ],
  imports: [
    CommonModule,
    NewuserRoutingModule,
    sharedModule
  ]
})
export class NewuserModule { }

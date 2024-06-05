import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdituserRoutingModule } from './edituser-routing.module';
import { EdituserComponent } from './edituser.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EdituserComponent
  ],
  imports: [
    CommonModule,
    EdituserRoutingModule,
    sharedModule
  ]
})
export class EdituserModule { }

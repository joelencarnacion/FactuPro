import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { AdministratorsComponent } from './administrators.component';
import { AdministratorsRoutingModule } from './administrators-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdministratorsComponent],
  imports: [CommonModule,  FormsModule,
    ReactiveFormsModule, AdministratorsRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class AdministratorsModule {}

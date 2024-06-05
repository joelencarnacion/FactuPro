import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { sharedModule } from 'src/app/shared/shared.module';
import { BranchesComponent } from './branches.component';
import { BranchesRoutingModule } from './branches-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BranchesComponent],
  imports: [
    CommonModule,
   BranchesRoutingModule,
   sharedModule,
   FormsModule,
   ReactiveFormsModule
  ],
})
export class BranchesModule {}

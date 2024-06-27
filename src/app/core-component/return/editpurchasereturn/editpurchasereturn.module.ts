import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpurchasereturnRoutingModule } from './editpurchasereturn-routing.module';
import { EditpurchasereturnComponent } from './editpurchasereturn.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditpurchasereturnComponent],
  imports: [
    CommonModule,
    EditpurchasereturnRoutingModule,
    sharedModule,
  ],
  bootstrap: [EditpurchasereturnComponent],
})
export class EditpurchasereturnModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditpurchaseRoutingModule } from './editpurchase-routing.module';
import { EditpurchaseComponent } from './editpurchase.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditpurchaseComponent],
  imports: [
    CommonModule,
    EditpurchaseRoutingModule,
    sharedModule,
  ],
  bootstrap: [EditpurchaseComponent],
})
export class EditpurchaseModule {}

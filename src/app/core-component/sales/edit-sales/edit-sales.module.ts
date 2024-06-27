import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSalesRoutingModule } from './edit-sales-routing.module';
import { EditSalesComponent } from './edit-sales.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditSalesComponent],
  imports: [
    CommonModule,
    EditSalesRoutingModule,
    sharedModule,
  ],
  bootstrap: [EditSalesComponent],
})
export class EditSalesModule {}

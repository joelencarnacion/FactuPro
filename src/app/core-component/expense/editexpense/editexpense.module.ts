import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditexpenseRoutingModule } from './editexpense-routing.module';
import { EditexpenseComponent } from './editexpense.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditexpenseComponent
  ],
  imports: [
    CommonModule,
    EditexpenseRoutingModule,
    sharedModule
  ],
  bootstrap: [EditexpenseComponent]
})
export class EditexpenseModule { }

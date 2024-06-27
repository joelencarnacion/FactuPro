import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreateexpenseRoutingModule } from './createexpense-routing.module';
import { CreateexpenseComponent } from './createexpense.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateexpenseComponent
  ],
  imports: [
    CommonModule,
    CreateexpenseRoutingModule,
    DatepickerModule,
    sharedModule
  ],
  bootstrap: [CreateexpenseComponent]
})
export class CreateexpenseModule { }

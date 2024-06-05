import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosOrdersComponent } from './pos-orders.component';

const routes: Routes = [{ path: '', component: PosOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosOrdersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOrdersComponent } from './table-orders.component';

const routes: Routes = [{ path: '', component: TableOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableOrdersRoutingModule { }

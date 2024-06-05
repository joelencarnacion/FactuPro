import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningTableComponent } from './dining-table.component';

const routes: Routes = [{ path: '', component: DiningTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiningTableRoutingModule { }

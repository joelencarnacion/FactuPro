import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsReportComponent } from './items-report.component';

const routes: Routes = [{ path: '', component: ItemsReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsReportRoutingModule { }

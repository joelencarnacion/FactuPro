import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpuestoComponent } from './impuesto.component';

const routes: Routes = [{ path: '', component: ImpuestoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpuestoRoutingModule { }

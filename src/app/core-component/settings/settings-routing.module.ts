import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [

      {
        path: 'payment-settings',
        loadChildren: () =>
          import('./paymentsettings/paymentsettings.module').then(
            (m) => m.PaymentsettingsModule
          ),
      },
      {
        path: 'impuestos',
        loadChildren: () =>
          import('./impuesto/impuesto.module').then(
            (m) => m.ImpuestoModule),
      },
      {
        path: 'branches',
        loadChildren: () =>
          import('./branches/branches.module').then(
            (m) => m.BranchesModule
          ),
      },
      {
        path: 'empresa',
        loadChildren: () =>
          import('./empresa/empresa.module').then(
            (m) => m.EmpresaModule
          ),
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('./categoria/categoria.module').then(
            (m) => m.CategoriaModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

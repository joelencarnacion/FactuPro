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
          import('./modelo/modelo.module').then(
            (m) => m.ModeloModule
          ),
      },
      {
        path: 'impuestos',
        loadChildren: () =>
          import('./impuesto/impuesto.module').then(
            (m) => m.ImpuestoModule),
      },
      {
        path: 'marcas',
        loadChildren: () =>
          import('./marca/marca.module').then(
            (m) => m.MarcaModule
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
      {
        path: 'modelos',
        loadChildren: () =>
          import('./modelo/modelo.module').then(
            (m) => m.ModeloModule
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

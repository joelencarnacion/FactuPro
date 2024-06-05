import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { BranchesComponent } from './branches/branches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaComponent } from './empresa/empresa.component';


@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SettingsModule { }

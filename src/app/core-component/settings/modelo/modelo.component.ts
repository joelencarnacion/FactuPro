import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { MarcaI, ModeloI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { MarcasService } from 'src/app/services/marca.service';
import { ModelosService } from 'src/app/services/modelo.service';
import { paymentSettings } from 'src/app/shared/model/page.model';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
interface data {
  value: string;
}
@Component({
  selector: 'app-paymentsettings',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss'],
})
export class ModeloComponent implements OnInit{
  marcaList: Array<MarcaI> = [];
  modeloList: Array<ModeloI> = [];
  modeloForm: FormGroup;
  selectedMarca!: MarcaI;
  @ViewChild('agregarModelo') addBranchModal: any;

  constructor(
    private marcaService:MarcasService,
    private modeloService: ModelosService,
   private fb:FormBuilder
  ) {
    this.modeloForm = this.fb.group({
      idModelo: new FormControl<number>(0),
      nombre: new FormControl<string>('',[Validators.required]),
      idMarca: new FormControl<number>(0,[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.getModelos();
    this.getMarca();
  }

  get currentModelo():ModeloI{
    const modelo = this.modeloForm.value as ModeloI;
    return modelo;
  }


  getModelos(){
    this.modeloService.getModelo().subscribe((resp:ResponseI)=>{
      this.modeloList = resp.data;
    })
  }

  getMarca(){
    this.marcaService.getBranches().subscribe((resp:ResponseI)=>{
      this.marcaList = resp.data;
    })
  }

  postModelo() {
    console.log(this.currentModelo);
    this.modeloService.postModelo(this.currentModelo).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
      this.modeloForm.reset();
      this.getModelos();
    })
  }

  async deleteModelo(modelo: ModeloI) {
    let remove: boolean = await alertRemoveSure("Estas seguro?")
    if (remove) {
      this.modeloService.deleteModelo(modelo.idModelo!)
        .subscribe((resp: ResponseI) => {
          successMessageAlert(resp.message);
          this.getModelos();
        })
    }
  }

  updateModelo() {
    this.modeloService.updateModelo(this.currentModelo).subscribe((resp: any) => {
      console.log(resp);
      successMessageAlert(resp.message);
      this.getModelos()
    })
  }
  save(){
    if (this.modeloForm.invalid) {
        errorMessageAlert("Debes completar los campos obligatorios para guardar");
    }else {
      if (!this.currentModelo.idModelo) {
        this.postModelo()
        this.closedModal();
      }
      if (this.currentModelo.idModelo) {
        this.updateModelo();
        this.closedModal();
      }
    }
  }

  openEditModal(modelo: ModeloI) {
    // Asigna el registro seleccionado a la variable

    // Llena el formulario con los datos del registro seleccionado
    this.modeloForm.patchValue({
      nombre: modelo.nombre,
      idModelo: modelo.idModelo,
      idMarca: modelo.marca.idMarca
    });
    console.log(this.modeloForm.value);

    document.getElementById('modalTitle')!.innerText = 'Editar modelo';
  }

  closedModal() {
    const modalElement = document.getElementById('agregarModelo');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';

      // Remove the modal-backdrop
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop && modalBackdrop.parentNode) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }

      // Remove classes that prevent scrolling
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    this.modeloForm.reset();
  }

  resetFormEdit() {
    this.modeloForm.reset(); // Restablece los valores del formulario
    document.getElementById('modalTitle')!.innerText = 'Editar modelo';
  }
  resetFormAdd() {
    this.modeloForm.reset(); // Restablece los valores del formulario
    document.getElementById('modalTitle')!.innerText = 'Agregar modelo';
    // console.log(this.currentMarca)

  }
}










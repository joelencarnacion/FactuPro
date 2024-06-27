import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MesaI, ResponseI } from '../../interfaces/allinterfaces';
import { MesasService } from 'src/app/services/mesas.service';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';

@Component({
  selector: 'app-dining-table',
  templateUrl: './dining-table.component.html',
  styleUrls: ['./dining-table.component.scss']
})
export class DiningTableComponent implements OnInit {
  mesaForm: FormGroup;
  mesasList: Array<MesaI> = [];
  selectedMesa: MesaI | undefined;

  constructor(
   private fb:FormBuilder,
   private mesaService: MesasService
  ){
    this.mesaForm = this.fb.group({
      id: new FormControl<number>(0),
      name: new FormControl<string>('',[Validators.required]),
      size: new FormControl<number>(0,[Validators.required]),
      status: new FormControl<boolean>(true),
    })
  }
  ngOnInit(): void {
    this.getMesas();
  }
  get currentMesas():MesaI{
    const mesa = this.mesaForm.value as MesaI;
    return mesa;
  }
  getMesas() {
    this.mesaService.getMesas().subscribe((resp: ResponseI) => {
      this.mesasList = resp.data;
      console.log(this.mesasList);

    })
  }
  postMesa() {
    this.mesaService.postMesas(this.currentMesas).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
      this.mesaForm.reset();
      this.getMesas();
    })
  }
  updateBranch() {
    this.mesaService.updateMesas(this.currentMesas).subscribe((resp: any) => {
      successMessageAlert(resp.message);
      this.getMesas()
    })
  }
  async deleteMesa(mesa: MesaI) {
    let remove: boolean = await alertRemoveSure("Estas seguro que deseas eliminar esta mesa?")
    if (remove) {
      this.mesaService.deleteMesas(mesa.id!)
        .subscribe((resp: ResponseI) => {
          successMessageAlert(resp.message);
          this.getMesas();
        })
    }
  }
  downloadQRCode(qrCodeUrl: string) {
    // Abre una nueva ventana para descargar el archivo
    window.open(qrCodeUrl);
  }
  openEditModal(mesa: MesaI) {
    // Asigna el registro seleccionado a la variable
    this.selectedMesa = mesa;

    // Llena el formulario con los datos del registro seleccionado
    this.mesaForm.reset(mesa);
    // Cambia el título del modal
    document.getElementById('modalTitle')!.innerText = 'Editar  Mesa';
    console.log(this.currentMesas)
  }
closedModal(){
  const modalElement = document.getElementById('addtable');
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.style.display = 'none';
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop && modalBackdrop.parentNode) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
  }
  this.mesaForm.reset();
}
  save(){
    if (this.mesaForm.invalid) {
        errorMessageAlert("Debes completar los campos obligatorios para guardar");
    }else {
      if (!this.currentMesas.id) {
        this.postMesa()
        this.closedModal();
      }
      if (this.currentMesas.id) {
        this.updateBranch();
        this.closedModal();
      }
    }


  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { ImpuestoI, ResponseI} from 'src/app/interfaces/allinterfaces';
import { ImpuestosService } from 'src/app/services/impuestos.service';

@Component({
  selector: 'app-taxrates',
  templateUrl: './impuesto.component.html',
  styleUrls: ['./impuesto.component.scss'],
})
export class ImpuestoComponent implements OnInit {
  impuestosList: Array<ImpuestoI> =[];
  impuestosForm:FormGroup;
  selectedImpuesto!: ImpuestoI;
  constructor(
    public  impuestosService: ImpuestosService,
    public fb:FormBuilder
  ){
    this.impuestosForm = this.fb.group({
      idImpuesto: new FormControl<number>(0),
      nombre: new FormControl<string>('',[Validators.required]),
      descripcion:new FormControl<string>('',[Validators.required]),
      impuestoAcreditable :new FormControl<boolean>(false),
      porcentaje: new FormControl<number>(0,[Validators.required]),
    })
  }
  ngOnInit(): void {
 this.getImpuestos();
  }
  get currentImpuesto():ImpuestoI{
    const impuesto = this.impuestosForm.value as ImpuestoI;
    return impuesto;
  }


  getImpuestos() {
    this.impuestosService.getImpuestos().subscribe((resp: ResponseI) => {
      this.impuestosList = resp.data;
      console.log(this.impuestosList);
    })
  }
  postimpuesto() {
    this.impuestosService.postImpuesto(this.currentImpuesto).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
      this.getImpuestos();
    })
  }

  updateImpuesto() {
    this.impuestosService.updateImpuesto(this.currentImpuesto).subscribe((resp: any) => {
      successMessageAlert(resp.message);
      this.getImpuestos()
    })
  }

  async deleteimpuesto(impuesto: ImpuestoI) {
    let remove: boolean = await alertRemoveSure("Estas seeguro que deseas eliminar este impuesto?")
    if (remove) {
      this.impuestosService.deleteImpuesto(impuesto.idImpuesto!)
        .subscribe((resp: ResponseI) => {
          successMessageAlert(resp.message);
          this.getImpuestos();
        })
    }
  }

  openEditModal(impuesto: ImpuestoI) {
    // Asigna el registro seleccionado a la variable
    this.selectedImpuesto = impuesto;

    // Llena el formulario con los datos del registro seleccionado
    this.impuestosForm.patchValue({
      idImpuesto: this.selectedImpuesto.idImpuesto,
      nombre: this.selectedImpuesto.nombre,
      descripcion: this.selectedImpuesto.descripcion,
      porcentaje: this.selectedImpuesto.porcentaje
    });
    // Cambia el título del modal

  }

  save(){
    console.log(this.impuestosForm.value);

  if (this.impuestosForm.invalid) {
    errorMessageAlert("Faltan campos por llenar")
  }else{

    if (!this.currentImpuesto.idImpuesto) {
      this.postimpuesto();
      this.closedModal();
    }else{
      this.updateImpuesto();
      this.closedModal();
    }
  }


  }

  closedModal() {
    const modalElement = document.getElementById('addpayment');
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
    this.impuestosForm.reset();
  }


  resetFormEdit() {
    this.impuestosForm.reset(); // Restablece los valores del formulario
    document.addEventListener('DOMContentLoaded', () => {
      const modalTitle = document.getElementById('modalTitle');
      if (modalTitle) {
        modalTitle.innerText = 'Editar Impuesto';
      }
    });
  }
  resetFormAdd() {
    this.impuestosForm.reset(); // Restablece los valores del formulario
    document.getElementById('modalTitle')!.innerText = 'Add Branch';

  }

}

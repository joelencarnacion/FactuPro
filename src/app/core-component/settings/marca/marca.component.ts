import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { BranchesI, CategoriaI, MarcaI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcasService } from 'src/app/services/marca.service';
import { categoryList } from '../../../shared/model/page.model';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit{
  marcaList: Array<MarcaI> = [];
  categoryList: Array<CategoriaI> = [];
  MarcaForm: FormGroup;
  selectedMarca!: MarcaI;
  @ViewChild('add_branch') addBranchModal: any;

constructor(
   private branchesService:MarcasService,
   private categoriaService: CategoriaService,
   private fb:FormBuilder
){
  this.MarcaForm = this.fb.group({
    idMarca: new FormControl<number>(0),
    nombre: new FormControl<string>('',[Validators.required]),
    idCategoria: new FormControl<number>(0,[Validators.required]),
  })
}

  ngOnInit(): void {
    this.getMarca();
    this.getCategoria();
  }

  get currentMarca():MarcaI{
    const branch = this.MarcaForm.value as MarcaI;
    return branch;
  }

getMarca() {
  this.branchesService.getBranches().subscribe((resp: ResponseI) => {
    this.marcaList = resp.data;
    console.log(this.marcaList);

  })
}
getCategoria() {
  this.categoriaService.getProductCategory().subscribe((resp: ResponseI) => {
    this.categoryList = resp.data;
  })
}
postBranch() {
  this.branchesService.postMarca(this.currentMarca).subscribe((resp: ResponseI) => {
    successMessageAlert(resp.message);
    this.MarcaForm.reset();
    this.getMarca();
  })
}

async deleteBranch(marca: MarcaI) {
  let remove: boolean = await alertRemoveSure("Estas seguro?")
  if (remove) {
    this.branchesService.deleteMarca(marca.idMarca!)
      .subscribe((resp: ResponseI) => {
        successMessageAlert("Success");
        this.getMarca();
      })
  }
}

updateBranch() {
  this.branchesService.updateMarca(this.currentMarca).subscribe((resp: any) => {
    console.log(resp);
    successMessageAlert(resp.message);
    this.getMarca()
  })
}


closedModal() {
  const modalElement = document.getElementById('add_branch');
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
  this.MarcaForm.reset();
}


openEditModal(marca: MarcaI) {
  // Asigna el registro seleccionado a la variable

  // Llena el formulario con los datos del registro seleccionado
  this.MarcaForm.patchValue({
    nombre: marca.nombre,
    idCategoria: marca.categoria.idCategoria,
    idMarca: marca.idMarca
  });
  console.log(this.MarcaForm.value);

  document.getElementById('modalTitle')!.innerText = 'Editar marca';
}

resetFormEdit() {
  this.MarcaForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Editar marca';
}
resetFormAdd() {
  this.MarcaForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Agregar marca';
  console.log(this.currentMarca)

}

save(){
  if (this.MarcaForm.invalid) {
      errorMessageAlert("Debes completar los campos obligatorios para guardar");
  }else {
    if (!this.currentMarca.idMarca) {
      this.postBranch()
      this.closedModal();
    }
    if (this.currentMarca.idMarca) {
      this.updateBranch();
      this.closedModal();
    }
  }
}


}



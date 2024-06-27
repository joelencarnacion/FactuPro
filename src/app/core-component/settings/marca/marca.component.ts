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
  selectedMarca: any;
  @ViewChild('add_branch') addBranchModal: any;

constructor(
   private branchesService:MarcasService,
   private categoriaService: CategoriaService,
   private fb:FormBuilder
){
  this.MarcaForm = this.fb.group({
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

async deleteBranch(branch: BranchesI) {
  let remove: boolean = await alertRemoveSure("are you sure?")
  if (remove) {
    this.branchesService.deleteMarca(branch.id!)
      .subscribe((resp: ResponseI) => {
        successMessageAlert("Success");
        this.getMarca();
      })
  }
}

updateBranch() {
  this.branchesService.updateMarca(this.currentMarca).subscribe((resp: any) => {
    successMessageAlert("Success");
    this.getMarca()
  })
}


closedModal(){
  const modalElement = document.getElementById('Agregar Marca');
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.style.display = 'none';
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdrop && modalBackdrop.parentNode) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
  }
  this.MarcaForm.reset();
}
openEditModal(marca: MarcaI) {
  // Asigna el registro seleccionado a la variable
  this.selectedMarca = marca;
  // Llena el formulario con los datos del registro seleccionado
  this.MarcaForm.patchValue({
    nombre: this.selectedMarca.nombre,
    idCategoria: this.selectedMarca.idCategoria,

  });
  // Cambia el título del modal
  document.getElementById('modalTitle')!.innerText = 'Editar marca';
  console.log(this.currentMarca)
}

resetFormEdit() {
  this.MarcaForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Edit Branch';
}
resetFormAdd() {
  this.MarcaForm.reset(); // Restablece los valores del formulario
  document.getElementById('modalTitle')!.innerText = 'Add Branch';
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



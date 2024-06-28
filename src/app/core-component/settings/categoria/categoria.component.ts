import { Component, OnInit } from '@angular/core';
import { CategoriaI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-item-category',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit{

  prodcutCategoryList: Array<CategoriaI> = []
  categoryForm:FormGroup;
  selectedCategory!: CategoriaI;
  constructor(
    private productCategoryService: CategoriaService,
    private fb:FormBuilder
  ){
    this.categoryForm = this.fb.group({
      idCategoria: new FormControl<number>(0),
      nombre: new FormControl<string>('',[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.getProductCategory();
  }

  get currentCategory():CategoriaI{
    const category = this.categoryForm.value as CategoriaI;
    return category;
  }

  getProductCategory(){
    this.productCategoryService.getProductCategory().subscribe((resp:any)=>{
      this.prodcutCategoryList = resp.data;
    })
  }
  postCategory() {
    this.productCategoryService.postProductCategory(this.currentCategory).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
      this.categoryForm.reset();
      this.getProductCategory();
    })
  }

async deleteCategory(category: CategoriaI) {
  let remove: boolean = await alertRemoveSure("Estas seguro que deseas eliminar esta categoría?")
  if (remove) {
    this.productCategoryService.deleteProductCategory(category.idCategoria!)
      .subscribe((resp: ResponseI) => {
        this.getProductCategory();
      })
  }
}
updateCategory() {
  this.productCategoryService.updateProductCategory(this.currentCategory).subscribe((resp: any) => {
    successMessageAlert(resp.message);
    this.getProductCategory()
  })
}

openEditModal(category: CategoriaI) {
  // Asigna el registro seleccionado a la variable
  this.selectedCategory = category;
  // Llena el formulario con los datos del registro seleccionado
  this.categoryForm.patchValue({
    idCategoria: this.selectedCategory.idCategoria,
    nombre: this.selectedCategory.nombre,
  });

  console.log(this.categoryForm.value);


  // Cambia el título del modal
  document.getElementById('modalTitle')!.innerText = 'Edit Branch';
  console.log(this.currentCategory)
}
resetFormEdit() {
  this.categoryForm.reset(); // Restablece los valores del formulario
  document.addEventListener('DOMContentLoaded', () => {
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
      modalTitle.innerText = 'Editar Categoría';
    }
  });
}

  save(){
    console.log(this.categoryForm.value);

    if (this.categoryForm.invalid) {
        errorMessageAlert("Debes completar los campos obligatorios para guardar");
    }else{

      if (!this.currentCategory.idCategoria) {
        this.postCategory()
        this.closedModal();
      }
      if (this.currentCategory.idCategoria) {
        this.updateCategory();
        this.closedModal();
      }
    }


  }

  closedModal() {
    const modalElement = document.getElementById('itemCategory');
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
    this.categoryForm.reset();
  }




}

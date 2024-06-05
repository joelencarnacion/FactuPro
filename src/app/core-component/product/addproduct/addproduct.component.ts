import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { CategoriaI, ImpuestoI, ProductosI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { ImpuestosService } from '../../../services/impuestos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { alertRemoveSure, errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { ProductosService } from '../../../services/productos.service';
import { CategoriaService } from 'src/app/services/categoria.service';
interface data {
  value: string;
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit{
  public routes = routes;
productoForm: FormGroup;
categoriaList: Array<CategoriaI> = []
impuestosList: Array<ImpuestoI> = []
imagenSeleccionada?: File;

  constructor(private serviceCategoriaProducton:CategoriaService,
    private Impuestosservice: ImpuestosService,
    private fb:FormBuilder,
    private productoservice:ProductosService
    ){
      this.productoForm = this.fb.group({
        // IdEmpresa: new FormControl<number>(0),
        // RazonSocial: new FormControl<number>(0,[Validators.required]),
        // NombreComercial: new FormControl<number>(0,[Validators.required]),
        // Rnc: new FormControl<string>('',[Validators.required]),
        // Telefono1: new FormControl<string>('',[Validators.required]),
        // Telefono2: new FormControl<number>(0,[Validators.required]),
        // Direccion: new FormControl<boolean>(true,[Validators.required]),
        // Correo: new FormControl<boolean>(true,[Validators.required]),
        // Web: new FormControl<boolean>(true,[Validators.required]),
        // IdRegimen: new FormControl<boolean>(true,[Validators.required]),
        // IdSector: new FormControl<boolean>(true,[Validators.required]),
        // CantEmpleados: new FormControl<boolean>(true,[Validators.required]),
      })
  }
  ngOnInit(): void {
    this.getProductoCategory();
    this.getImpuestos();
  }
  get currentProduct():ProductosI{
    const producto = this.productoForm.value as ProductosI;
    return producto;
  }

  getProductoCategory(){
    this.serviceCategoriaProducton.getProductCategory().subscribe((resp:ResponseI)=>{
      this.categoriaList= resp.data;
    })
  }

  getImpuestos(){
    this.Impuestosservice.getImpuestos().subscribe((resp:ResponseI)=>{
      this.impuestosList = resp.data;
    })
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.imagenSeleccionada = inputElement.files[0];
      this.mostrarImagenSeleccionada();
    }
  }

  mostrarImagenSeleccionada(): void {
    const reader = new FileReader();
    reader.onload = () => {
      const imagenElemento = document.getElementById('imagenSeleccionada');
      if (imagenElemento) {
        imagenElemento.setAttribute('src', reader.result as string);
      }
    };
    reader.readAsDataURL(this.imagenSeleccionada!);
  }
  postProducto(data:any) {
    this.productoservice.postProductos(data).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
    })
  }

  enviarDatos(): void {

    const formData = new FormData();
    formData.append('ProductCategoryId', this.productoForm.get('ProductCategoryId')!.value);
    formData.append('TaxId', this.productoForm.get('TaxId')!.value);
    formData.append('Name', this.productoForm.get('Name')!.value);
    formData.append('Description', this.productoForm.get('Descripcion')!.value);
    formData.append('Price', this.productoForm.get('Price')!.value);
    formData.append('Status', this.productoForm.get('Status')!.value);
    formData.append('IsFeatured', this.productoForm.get('IsFeatured')!.value);
    if (this.imagenSeleccionada) {
      formData.append('Image', this.imagenSeleccionada);
    }
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    this.postProducto(formData);
  }



  save(){
    if (this.productoForm.invalid) {
        errorMessageAlert("Debes completar los campos obligatorios para guardar");
    }else {
      if (!this.currentProduct.id) {
       console.log(this.productoForm.value);
       this.enviarDatos()
      }
    }


  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';
import { routes } from 'src/app/core/helpers/routes';
import { CategoriaI, ImpuestoI, ProductosI, ResponseI } from 'src/app/interfaces/allinterfaces';
import { ImpuestosService } from 'src/app/services/impuestos.service';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent {
  public routes = routes;


  productoForm: FormGroup;
categoriaList: Array<CategoriaI> = []
impuestosList: Array<ImpuestoI> = []
imagenSeleccionada?: File;
getproductId:string = ''
productoObtenido!:ProductosI;

  constructor(private serviceCategoriaProducton:CategoriaService,
    private Impuestosservice: ImpuestosService,
    private fb:FormBuilder,
    private productoservice:ProductosService,
    private route: ActivatedRoute
    ){
      this.productoForm = this.fb.group({
        id: new FormControl<number>(0),
        ProductCategoryId: new FormControl<number>(0,[Validators.required]),
        TaxId: new FormControl<number>(0,[Validators.required]),
        Name: new FormControl<string>('',[Validators.required]),
        Descripcion: new FormControl<string>('',[Validators.required]),
        Price: new FormControl<number>(0,[Validators.required]),
        Status: new FormControl<boolean>(true,[Validators.required]),
        IsFeatured: new FormControl<boolean>(true,[Validators.required]),
      })
  }
  ngOnInit(): void {
    this.getProductoCategory();
    this.getImpuestos();
    this.route.paramMap.subscribe(params => {
      this.getproductId = params.get('id')!;
      const id: number = parseInt(this.getproductId);
      this.getProductoById(id)
    });
  }


  get currentProduct():ProductosI{
    const producto = this.productoForm.value as ProductosI;
    return producto;
  }

  getProductoById(id:number) {
    this.productoservice.getProductosById(id).subscribe((resp: any) => {
      this.productoObtenido = resp.data
      console.log(this.productoObtenido);

      this.productoForm.patchValue({
        id: this.productoObtenido.id,
        ProductCategoryId: this.productoObtenido.productCategoryId,
        TaxId: this.productoObtenido.taxId,
        Name: this.productoObtenido.name,
        Descripcion: this.productoObtenido.description,
        Price: this.productoObtenido.price,
        Status: this.productoObtenido.status,
        IsFeatured: this.productoObtenido.isFeatured,
      });
      // this.imagenSeleccionada = this.productoObtenido.image
    })


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
  updateProducto(data:any) {
    this.productoservice.updateProductos(data).subscribe((resp: any) => {
      successMessageAlert("Success");

    })
  }

  enviarDatos(): void {

    const formData = new FormData();
    formData.append('Id', this.productoForm.get('id')!.value);
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
    this.updateProducto(formData);
  }


  save(){
    if (this.productoForm.invalid) {
        errorMessageAlert("Debes completar los campos obligatorios para guardar");
    }else {
      if (this.currentProduct.id) {
        this.enviarDatos()
      }
    }


  }
}

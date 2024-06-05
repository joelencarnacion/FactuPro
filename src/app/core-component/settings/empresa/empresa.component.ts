import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EmpresaI, NumEmpleadosI, RegimenI, ResponseI, SectorI, UsuarioActualI } from '../../../interfaces/allinterfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';

@Component({
  selector: 'app-company',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  imagenSeleccionada?:  string | File;
  regimenList: Array<RegimenI>= []
  sectorList: Array<SectorI>= []
  empresa: any;
  empresaForm: FormGroup;
  idEmpresa:number = 0
  public usuarioActual!: UsuarioActualI;

  constructor(
    private empresaservice:EmpresaService,
    private fb:FormBuilder,
  ){
    this.empresaForm = this.fb.group({
      razonSocial: new FormControl<string>('',[Validators.required]),
      nombreComercial: new FormControl<string>('',[Validators.required]),
      rnc: new FormControl<string>(''),
      telefono1: new FormControl<string>('',[Validators.required]),
      telefono2: new FormControl<string>(''),
      direccion: new FormControl<string>('',[Validators.required]),
      correo: new FormControl<string>(''),
      web: new FormControl<string>('',[Validators.required]),
      idRegimen: new FormControl<number>(0,[Validators.required]),
      idSector: new FormControl<number>(0,[Validators.required]),
      cantEmpleados: new FormControl<string>('',[Validators.required]),
    })
  }

  numEmpleadosData : NumEmpleadosI[]=[
    {valor : '1 a 10', nombre: '1 a 10'},
    {valor : '11 a 50', nombre: '11 a 50'},
    {valor : '51 a 100', nombre: '51 a 100'},
    {valor : '101 a 200', nombre: '101 a 200'},
    {valor : 'Más de 200', nombre: 'Más de 200'},
  ];
  ngOnInit(): void {
    this.usuarioActual = JSON.parse(localStorage.getItem("usuario")!);
    this.idEmpresa = this.usuarioActual.sucursal.idEmpresa
    this.getEmpresaById()
    this.getRegimen();
    this.getSector();
  }

  getRegimen(){
    this.empresaservice.getRegimen().subscribe((resp:ResponseI)=>{
      this.regimenList = resp.data;
    })
  }
  getSector(){
    this.empresaservice.getSector().subscribe((resp:ResponseI)=>{
      this.sectorList = resp.data;
    })
  }

  getEmpresaById(){
    this.empresaservice.getEmpresaById(this.idEmpresa).subscribe((resp: ResponseI) => {
      this.empresa = resp.data;
      console.log(this.empresa);
      this.imagenSeleccionada = this.empresa.logo;

      this.mostrarImagenSeleccionada()
      this.empresaForm.patchValue({
        razonSocial: this.empresa.razonSocial,
        nombreComercial: this.empresa.nombreComercial,
        rnc: this.empresa.rnc,
        correo: this.empresa.correo,
        telefono1: this.empresa.sucursalPrincipal.telefono1,
        telefono2: this.empresa.sucursalPrincipal.telefono2,
        direccion: this.empresa.sucursalPrincipal.direccion,
        web: this.empresa.web,
        idRegimen: this.empresa.idRegimen,
        idSector: this.empresa.idSector,
        cantEmpleados: this.empresa.cantEmpleados,
      });


    })
  }
  updateEmpresa(data:any) {
    this.empresaservice.updateEmpresa(data).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
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
    const imagenElemento = document.getElementById('imagenSeleccionada');
    if (imagenElemento) {
      if (typeof this.imagenSeleccionada === 'string') {
        // Si imagenSeleccionada es una URL, asignarla directamente
        imagenElemento.setAttribute('src', this.imagenSeleccionada);
      } else if (this.imagenSeleccionada instanceof File) {
        // Si imagenSeleccionada es un archivo, usar FileReader
        const reader = new FileReader();
        reader.onload = () => {
          imagenElemento.setAttribute('src', reader.result as string);
        };
        reader.readAsDataURL(this.imagenSeleccionada);
      }
    } else {
      console.error('No se pudo encontrar el elemento de la imagen.');
    }
  }

  enviarDatos(): void {
    const formData = new FormData();
    formData.append('IdEmpresa', this.idEmpresa.toString());
    formData.append('RazonSocial', this.empresaForm.get('razonSocial')!.value);
    formData.append('NombreComercial', this.empresaForm.get('nombreComercial')!.value);
    formData.append('Rnc', this.empresaForm.get('rnc')!.value);
    formData.append('Telefono1', this.empresaForm.get('telefono1')!.value);
    formData.append('Telefono2', this.empresaForm.get('telefono2')!.value);
    formData.append('Direccion', this.empresaForm.get('direccion')!.value);
    formData.append('Correo', this.empresaForm.get('correo')!.value);
    formData.append('Web', this.empresaForm.get('web')!.value);
    formData.append('IdSector', this.empresaForm.get('idSector')!.value);
    formData.append('CantEmpleados', this.empresaForm.get('cantEmpleados')!.value);
    formData.append('IdRegimen', this.empresaForm.get('idRegimen')!.value);
    if (this.imagenSeleccionada) {
      formData.append('Logo', this.imagenSeleccionada);
    }
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    this.updateEmpresa(formData);
  }

  save(){
    if (this.empresaForm.invalid) {
      errorMessageAlert('Llene los campos obligatorios para guardar')
    }else{
      this.enviarDatos()
    }
  }

}

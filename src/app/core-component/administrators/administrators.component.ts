import { Component, OnInit } from '@angular/core';
import { USuariosService } from '../../services/usuarios.service';
import { ResponseI, UsuarioActualI } from 'src/app/interfaces/allinterfaces';
import { useAnimation } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {

  UserAdminList: Array<UsuarioActualI> = []; //Array de usuario administrador
  administartorForm: FormGroup;
  constructor(
    private usuariosService: USuariosService,
    private fb:FormBuilder
  ){
    this.administartorForm = this.fb.group({
      id: new FormControl<number>(0),
      name: new FormControl<string>('',[Validators.required]),
      email: new FormControl<string>('',[Validators.required]),
      password: new FormControl<string>('',[Validators.required]),
      password1: new FormControl<string>('',[Validators.required]),
      phone:  new FormControl<string>('',[Validators.required]),
      status: new FormControl<boolean>(true,[Validators.required]),
    })
  }

  ngOnInit(): void {
   this.getUsuarios();
  }

  get currentAdministrator():UsuarioActualI{
    const usuario = this.administartorForm.value as UsuarioActualI;
    return usuario;
  }

  getUsuarios(){
    this.usuariosService.getUsuairos().subscribe((resp:ResponseI)=>{
      this.UserAdminList= resp.data;
      console.log(this.UserAdminList);
    })
  }
  postUsuario() {
    this.usuariosService.postUsuairo(this.currentAdministrator).subscribe((resp: ResponseI) => {
      successMessageAlert(resp.message);
      this.administartorForm.reset();
      this.getUsuarios();
    })
  }
  closedModal(){
    const modalElement = document.getElementById('addAdmin');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop && modalBackdrop.parentNode) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }
    }
    this.administartorForm.reset();
  }

  verificarContrasenas(): void {
    const password1 = this.administartorForm.get('password1')!.value;
    const password = this.administartorForm.get('password')!.value;

    if (password1 == password) {
      this.postUsuario();
    }
    if (password1 !== password) {
      errorMessageAlert("Las contraseñas no coinciden.");
    }
  }
save(){
  console.log(this.administartorForm.value);

  if (this.administartorForm.invalid) {
      errorMessageAlert("Debes completar los campos obligatorios para guardar");
  }else {
    if (!this.currentAdministrator.idUsuario) {
      this.verificarContrasenas();
      this.closedModal();
    }
    // if (this.currentAdministrator.id) {
    //   this.updateBranch();
    //   this.closedModal();
    // }
  }


}

}

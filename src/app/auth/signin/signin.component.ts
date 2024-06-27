import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { ResponseI, UserI, UsuarioActualI } from 'src/app/interfaces/allinterfaces';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { LoginService } from '../../services/login.service';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { errorMessageAlert, successMessageAlert } from 'src/app/core/helpers/alert';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(private storage: WebstorgeService,
    private loginService: LoginService,
    private router: Router,) { }

  public routes = routes;
  isRegisterActive: boolean = false;
  public userNow!: UserI;
  user: Array<UsuarioActualI> = [];
  token?: string;


  toggleRegister() {
    this.isRegisterActive = true;
  }
  toggleLogin() {
    this.isRegisterActive = false;
  }

  password = '';
  show = false;

  formLogin = new FormGroup({
    correo: new FormControl('admin@gmail.com', [Validators.required]),
    contrasena: new FormControl('admin', [Validators.required]),
  });


  get f() {
    return this.formLogin.controls;
  }

  get currentUser(): UserI {
    const user = this.formLogin.value as UserI;
    return user;
  }

  ngOnInit() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }
  onLogin(): void {
    this.loginService.loginByEmail(this.currentUser).pipe(
      catchError(error => {
        this.errorMessageAlert("Credenciales incorrectas");
        throw error;
      })
    )
      .subscribe(
        resp => {
          resp.data
          let dataResponse: ResponseI = resp;
          this.token = resp.token;
          if (dataResponse.status == true) {
            this.user = dataResponse.data;
            localStorage.setItem("usuario", JSON.stringify(this.user));
            localStorage.setItem("token", JSON.stringify(this.token));
            localStorage.setItem('authenticated', 'true');
            this.router.navigate([routes.dashboard]);
            this.successMessageAlert("Bienvenido.")
          }
        })
  }

  submit() {
    console.log(this.formLogin.valid);
    if (this.formLogin.invalid) {
      this.errorMessageAlert("Debes llenar los campos necesarios")
    }
    if (this.formLogin.valid) {
      this.onLogin();
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  successMessageAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

   errorMessageAlert(message: string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

}

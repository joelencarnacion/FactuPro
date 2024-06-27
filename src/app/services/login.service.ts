import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseI, UserI, UsuarioActualI } from '../interfaces/allinterfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class LoginService {
  private baseUrl =environment.api;
  private usuario?: UsuarioActualI;

  constructor(private http: HttpClient) { }

  get currentUser():UsuarioActualI|undefined{
    if(!this.usuario) return undefined;
    return structuredClone(this.usuario);
  }

  loginByEmail(form:UserI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.baseUrl}/User/login`, form);
  }

  logout(){
    this.usuario = undefined;
    localStorage.clear();
  }

}

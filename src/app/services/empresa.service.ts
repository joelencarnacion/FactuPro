import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpresaI, ResponseI } from '../interfaces/allinterfaces';
import { errorMessageAlert } from '../core/helpers/alert';
import { I } from '@fullcalendar/core/internal-common';

@Injectable({providedIn: 'root'})
export class EmpresaService {

  private token = '';
  private baseUrl = environment.api;
  private headers: HttpHeaders;
  header: { headers: HttpHeaders };
  constructor(
    public http: HttpClient,
  ) {
    this.token = JSON.parse(localStorage.getItem("token")!);
    this.headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    this.header = { headers: this.headers };
  }


  getEmpresaById(id:number): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Empresa/${id}`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

  updateEmpresa(empresa: EmpresaI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Empresa`, empresa, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  getRegimen(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Empresa/getall-regimen`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }
  getSector(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Empresa/getall-sectores`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }
}

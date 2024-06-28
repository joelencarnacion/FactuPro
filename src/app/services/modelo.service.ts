import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MarcaI, ModeloI, ResponseI } from '../interfaces/allinterfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { errorMessageAlert } from '../core/helpers/alert';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ModelosService {

  private token = '';
  private baseUrl = environment.api;
  private headers: HttpHeaders;
  header: { headers: HttpHeaders };
  constructor(
    public http: HttpClient,
  ) {
    this.token = JSON.parse(localStorage.getItem("token")!);
    this.headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    this.header = { headers: this.headers }
  }


  getModelo(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Modelo`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postModelo(modelo: ModeloI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Modelo`, modelo, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateModelo(modelo: ModeloI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Modelo`, modelo, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteModelo(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Modelo/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MarcaI, ResponseI } from '../interfaces/allinterfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { errorMessageAlert } from '../core/helpers/alert';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MarcasService {

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
    console.log(this.token);
  }


  getBranches(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Marca`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postMarca(marca: MarcaI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Marca`, marca, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateMarca(marca: MarcaI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Marca`, marca, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteMarca(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Marca/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

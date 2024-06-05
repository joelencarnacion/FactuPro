import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImpuestoI, ResponseI } from '../interfaces/allinterfaces';
import { errorMessageAlert } from '../core/helpers/alert';
import { I } from '@fullcalendar/core/internal-common';

@Injectable({providedIn: 'root'})
export class ImpuestosService {

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


  getImpuestos(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Impuesto`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postImpuesto(impuesto: ImpuestoI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Impuesto`, impuesto, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateImpuesto(impuesto: ImpuestoI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Impuesto`, impuesto, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteImpuesto(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Impuesto/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

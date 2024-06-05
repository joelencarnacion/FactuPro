import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MesaI, ResponseI } from '../interfaces/allinterfaces';
import { errorMessageAlert } from '../core/helpers/alert';
import { I } from '@fullcalendar/core/internal-common';

@Injectable({providedIn: 'root'})
export class MesasService {

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


  getMesas(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Table`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postMesas(mesa: MesaI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Table`, mesa, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateMesas(mesa: MesaI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Table`, mesa, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteMesas(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Table/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

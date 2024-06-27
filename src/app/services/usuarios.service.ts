import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI, UsuarioActualI } from '../interfaces/allinterfaces';
import { errorMessageAlert } from '../core/helpers/alert';

@Injectable({providedIn: 'root'})
export class USuariosService {

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

  getUsuairos(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/User`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postUsuairo(usuario: UsuarioActualI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/User`, usuario, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateUsuairo(usuario: UsuarioActualI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/User`, usuario, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteUsuairos(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/User/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

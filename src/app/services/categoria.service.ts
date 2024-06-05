import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaI, ResponseI } from '../interfaces/allinterfaces';
import { errorMessageAlert } from '../core/helpers/alert';

@Injectable({providedIn: 'root'})
export class CategoriaService {

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


  getProductCategory(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.baseUrl}/Categoria`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }
  postProductCategory(category: CategoriaI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Categoria`, category, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }
    updateProductCategory(category: CategoriaI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Categoria`, category, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteProductCategory(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Categoria/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }
}

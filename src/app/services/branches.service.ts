import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BranchesI, ResponseI } from '../interfaces/allinterfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { errorMessageAlert } from '../core/helpers/alert';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class BranchesService {

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
    return this.http.get<ResponseI>(`${this.baseUrl}/Branch`, this.header)
      .pipe(catchError((error) => {errorMessageAlert("Error") ; return throwError(error) }))
  }

    postBranch(branch: BranchesI): Observable<ResponseI> {
    return this.http.post<ResponseI>(`${this.baseUrl}/Branch`, branch, this.header)
    .pipe(catchError((error) => { errorMessageAlert("Error"); return throwError(error) }))
  }

    updateBranch(branch: BranchesI): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.baseUrl}/Branch`, branch, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

  deleteBranch(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.baseUrl}/Branch/${id}`, this.header)
      .pipe(catchError((error) => { errorMessageAlert(error.error.message); return throwError(error) }))
  }

}

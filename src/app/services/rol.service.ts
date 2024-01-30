import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Rol } from '../Interfaces/rol';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlApi: string = environment.apiUrl + 'rol/';

  constructor(private http: HttpClient) { }

  listarRoles(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}listarRoles`);
  }

}

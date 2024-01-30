import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/login';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi: string = environment.apiUrl + 'usuario/';

  constructor(private http: HttpClient) { }

  iniciarSesion(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}iniciarSesion`, request);
  }
  listarUsuarios(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}listaUsuarios`);
  }
  registrarUsuario(request: Usuario): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}registrarUsuario`, request);
  }
  actualizarUsuario(request: Usuario): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlApi}actualizarUsuario`, request);
  }
  eliminarUsuario(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlApi}eliminarUsuario/${id}`);
  }
}

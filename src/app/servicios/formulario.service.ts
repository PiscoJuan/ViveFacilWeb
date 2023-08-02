import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  API_URL = `https://tomesoft1.pythonanywhere.com`;
  constructor(private http: HttpClient) { }

  obtener_profesiones() {
    return this.http.get(`${this.API_URL}/profesiones/`);
  }
  crear_proveedor_pendiente(data: any): any {
    return this.http.post(`${this.API_URL}/proveedor_pendiente/`, data);
  }
  getServicios(): any {
    return this.http.get(`${this.API_URL}/servicios`);
  }
}
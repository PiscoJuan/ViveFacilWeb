import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //API_URL = `https://tomesoft1.pythonanywhere.com`;
  API_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  validarProveedorPendiente(mail: string) {
    return this.http.get(this.API_URL+`/proveedores_pendientes_email/${mail}`)
  }

  validarDescuento(mail: string) {
    return this.http.get(this.API_URL+`/confirmar_descuento/${mail}`)
  }
}
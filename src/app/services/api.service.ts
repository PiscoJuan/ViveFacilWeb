import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  validarProveedorPendiente(mail: string) {
    return this.http.get(`https://tomesoft1.pythonanywhere.com/proveedores_pendientes_email/${mail}`)
  }

  validarDescuento(mail: string) {
    return this.http.get(`https://tomesoft1.pythonanywhere.com/confirmar_descuento/${mail}`)
  }
}

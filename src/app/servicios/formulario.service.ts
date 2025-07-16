import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  //API_URL = `https://tomesoft1.pythonanywhere.com`;
  API_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  obtener_profesiones() {
    return this.http.get(`${this.API_URL}/profesiones/`);
  }
  crear_proveedor_pendiente(data: any): any {
    const pendiente = new FormData();
    pendiente.append('nombres', data.nombres)
    pendiente.append('apellidos', data.apellidos)
    pendiente.append('genero', data.genero)
    pendiente.append('telefono', data.telefono)
    pendiente.append('cedula', data.cedula)
    if(  data.copiaCedula != null){
      pendiente.append('copiaCedula', data.copiaCedula as any)
    }
    pendiente.append('ciudad', data.ciudad)
    pendiente.append('direccion', data.direccion)
    pendiente.append('email', data.email)
    pendiente.append('descripcion', data.descripcion)
    pendiente.append('licencia', data.licencia)
    if(  data.copiaLicencia != null){
      pendiente.append('copiaLicencia', data.copiaLicencia)
    }
    pendiente.append('profesion', data.profesion)
    if( data.ano_experiencia != null){
      pendiente.append('ano_experiencia', data.ano_experiencia  as any)
    }
    pendiente.append('banco', data.banco)
    pendiente.append('numero_cuenta', data.numero_cuenta)
    pendiente.append('tipo_cuenta', data.tipo_cuenta)
    if(  data.foto != null){
      pendiente.append( 'foto', data.foto)
    }

    if( data.filesDocuments != null){
      pendiente.append('filesDocuments', data.filesDocuments[0]  as any)
    }
    //planilla_servicios: data.planilla_servicios
    console.log("LA COSAS ESAS LASMASD")
    console.log(pendiente)
    console.log(pendiente.get("foto"))
    console.log(pendiente.get("copiaCedula"))
    return this.http.post(`${this.API_URL}/proveedor_pendiente/`, pendiente);
  }
  getServicios(): any {
    return this.http.get(`${this.API_URL}/servicios`);
  }
  getBancos(): any {
    return this.http.get(`${this.API_URL}/bancos/`);
  }
}
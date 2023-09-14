import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service'
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  isAceptar = true; isNegar = true;
  formEdit: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    servicio: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    // apellidos: new FormControl('', [Validators.required]),
    // cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  });

  constructor(private formService: FormularioService, private api: ApiService) { 
    this.formService.getServicios().subscribe((resp: any) => {
      console.log("resp")
      console.log(resp)
        this.servicios= resp
    }); 
  }

  ngOnInit(): void {

  }

  refresh(): void {
    window.location.reload();
  }

  onAceptar() {
    console.log(this.formEdit.value)
    let pendiente: any = {
      nombres: this.formEdit.value.nombre,
      // apellidos: this.formEdit.value.apellidos,
      telefono: this.formEdit.value.telefono,
      email: this.formEdit.value.correo,
      descripcion: this.formEdit.value.titulo,
      profesion: this.formEdit.value.servicio,
    }
    console.log("pendiente")
    console.log(pendiente)
    this.api.validarDescuento(this.formEdit.value.correo).subscribe((resp: any) => {
      // if (resp == 'nuevo') {
        console.log("resp")
        console.log(resp)
      // }
      // else {
      //   console.log('Ya existe')
      // }
    })
  }

  isInvalidForm(subForm: string) {
    return this.formEdit.get(subForm)?.invalid && this.formEdit.get(subForm)?.touched || this.formEdit.get(subForm)?.dirty && this.getErrorMessage(this.formEdit, subForm).length !== 0;
  }

  getErrorMessage(formGroup: FormGroup, item: string): string {
    const itemControl: FormControl = formGroup.get(item) as FormControl;
    switch (item) {

      case 'nombre':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';

      case 'apellidos':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';

      case 'cedula':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'telefono':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'licencia':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'genero':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'copiaCedula':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'ciudad':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'descripcion':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'correo':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'tipo_cuenta':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'numero_cuenta':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'ano_experiencia':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'profesion':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'ano_experiencia':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      case 'descripcion':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return '';
      default:
        return '';
    }
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  numberOnlyPluss(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  establecerMensaje(mensaje: string, tipo: string) {
    if (tipo === 'aceptar') {
      this.isAceptar = true;
      this.isNegar = false;
    }
    else if (tipo === 'negar') {
      this.isAceptar = false;
      this.isNegar = true;
    } else if (tipo === 'actualizar') {
      this.isAceptar = false;
      this.isNegar = false;
    }
    // this.mensajeAlerta = mensaje;
  }
}

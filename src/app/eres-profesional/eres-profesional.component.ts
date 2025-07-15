import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api.service'
@Component({
  selector: 'app-eres-profesional',
  templateUrl: './eres-profesional.component.html',
  styleUrls: ['./eres-profesional.component.scss']
})
export class EresProfesionalComponent  {
  generos = ['Masculino', 'Femenino', 'Otro'];
  ciudades = ['Guayaquil', 'Quito', 'Cuenca', 'Sto. Domingo', 'Ibarra'];
  tipoCuentas = ['Ahorro', 'Corriente'];
  licencia = ['Si', 'No'];
  profesiones: any[] = [];

  total = 0
  arr_pendiente!: any[];
  arr_filtered_pendiente!: any[];
  condicionNext = false
  currentPage = 1
  pageNumber: number[] = [];
  pendiente_seleccionada: any
  existImageCrear = false; existImageActualizar = false;
  activo = ''
  activoCond = false
  mensajeAlerta: string = '';
  isAceptar = true; isNegar = true;
  habilitar = ''
  mostrar1=false;
  mostrar2=false;
  fileImgPerfil: File| null = null;
  filePDF1: File| null = null;
  filePDF2: File| null = null;
  filePDF3: File| null = null;
  fileImgPerfil1: File| null = null;
  fileImgPerfil2: File| null = null;
  fileImgPerfil3: File| null = null;
  copiaCedulaNombre= null;
  copiaLicenciaNombre= null;
  copiaDocumentosNombre= null;
  // imgPerfil: string| null = null;

  estadoRegistro="Registro exitoso"
  infoRegistro="Su información fue enviada correctamente."
  estadoRegistroFlag=true
  formEdit: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    cedula: new FormControl('',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
    telefono: new FormControl('',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    profesion: new FormControl('', [Validators.required]),
    copiaCedula: new FormControl(this.filePDF1 || [this.filePDF1] ? this.fileImgPerfil1 || [this.fileImgPerfil1] : [] , [Validators.required]),
    tipo_cuenta: new FormControl('', [Validators.required]),
    numero_cuenta: new FormControl('', [Validators.required]),
    banco: new FormControl('', [Validators.required]),
    ano_experiencia: new FormControl('', [Validators.required]),
    licencia: new FormControl(''), //no es obliagtorio
    copiaLicencia: new FormControl(this.filePDF2 || this.fileImgPerfil2), //no es obligatorio
    documentos: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    foto: new FormControl(this.fileImgPerfil, [Validators.required]),
    filesDocuments: new FormControl([this.filePDF3 || this.fileImgPerfil3],
      [Validators.required]),
    // foto: new FormControl('', [Validators.required]),
  });

  servicios: any[] = [];
  bancos: any[] = [];
  constructor(private formService: FormularioService,private sanitizer: DomSanitizer, private api: ApiService) {
    this.formService.getServicios().subscribe((resp: any) => {
      console.log("resp")
      console.log(resp)
      for (let i=0; i<resp.length; i++){
        this.profesiones= [...this.profesiones, resp[i].nombre]
      }
    });
    this.formService.getServicios().subscribe((resp: any) => {
      console.log(resp)
        this.servicios= resp
    });

    this.formService.getBancos().subscribe((resp: any) => {
      console.log("bancos")
      console.log(resp)
      for (let i=0; i<resp.length; i++){
        this.bancos= [...this.bancos, resp[i].nombre]
      }
    });
  }

 
  
  onAceptar() {
    console.log(this.formEdit.value)
    let pendiente: any = {
      nombres: this.formEdit.value.nombre,
      apellidos: this.formEdit.value.apellidos,
      genero: this.formEdit.value.genero,
      telefono: this.formEdit.value.telefono,
      cedula: this.formEdit.value.cedula,
      copiaCedula: this.filePDF1 || this.fileImgPerfil1  || [],
      ciudad: this.formEdit.value.ciudad,
      direccion: this.formEdit.value.direccion,
      email: this.formEdit.value.correo,
      descripcion: this.formEdit.value.descripcion,
      licencia: this.formEdit.value.licencia,
      copiaLicencia: this.filePDF2 || this.fileImgPerfil2 || [],
      profesion: this.formEdit.value.profesion,
      ano_experiencia: this.formEdit.value.ano_experiencia,
      banco: this.formEdit.value.banco,
      numero_cuenta: this.formEdit.value.numero_cuenta,
      tipo_cuenta: this.formEdit.value.tipo_cuenta,
      foto: this.fileImgPerfil,
      //planilla_servicios: this.formEdit.value.planilla_servicios
      filesDocuments: [this.filePDF3 || this.fileImgPerfil3] 
    }

    let camposFaltantes = [];

    if (!this.formEdit.value.nombre) {
      camposFaltantes.push('Nombre');
    }
    if (!this.formEdit.value.apellidos) {
      camposFaltantes.push('Apellidos');
    }
    if (!this.formEdit.value.genero) {
      camposFaltantes.push('Género');
    }
    if (!this.formEdit.value.telefono) {
      camposFaltantes.push('Teléfono');
    }
    if (!this.formEdit.value.cedula) {
      camposFaltantes.push('Cédula');
    }
    if (!this.formEdit.value.copiaCedula) {
      camposFaltantes.push('Archivo Copia de Cédula (PDF o imagen)');
    }
    if (!this.formEdit.value.ciudad) {
      camposFaltantes.push('Ciudad');
    }
    if (!this.formEdit.value.direccion) {
      camposFaltantes.push('Dirección');
    }
    if (!this.formEdit.value.correo) {
      camposFaltantes.push('Correo');
    }
    if (!this.formEdit.value.descripcion) {
      camposFaltantes.push('Descripción');
    }
    if (!this.filePDF3 && !this.fileImgPerfil3 ) {
      camposFaltantes.push('Archivo Curriculum');
    }
    if (!this.formEdit.value.profesion) {
      camposFaltantes.push('Profesión');
    }
    if (!this.formEdit.value.ano_experiencia) {
      camposFaltantes.push('Años de experiencia');
    }
    if (!this.formEdit.value.banco) {
      camposFaltantes.push('Banco');
    }
    if (!this.formEdit.value.numero_cuenta) {
      camposFaltantes.push('Número de cuenta');
    }
    if (!this.formEdit.value.tipo_cuenta) {
      camposFaltantes.push('Tipo de cuenta');
    }
    if (!this.fileImgPerfil) {
      camposFaltantes.push('Imagen de perfil');
    }

    // Verificar si hay campos faltantes
    if (camposFaltantes.length === 0) {
      this.estadoRegistro='Registro exitoso'
      this.infoRegistro='Su información fue enviada correctamente.'
      this.estadoRegistroFlag=true
      this.api.validarProveedorPendiente(this.formEdit.value.correo).subscribe({
        next: (resp: any) => {
        if (resp == 'nuevo') {
          this.formService.crear_proveedor_pendiente(pendiente).subscribe((resp: any) => {
            console.log("resp")
            console.log(resp)
          })
        }
        else {
          console.log('Ya existe')
          this.estadoRegistro='Error en el Registro'
          this.infoRegistro='El correo enviado ya se encuenta registrado.'
          this.estadoRegistroFlag=false
        }
      },
      error: (error)=>{
        console.error('Error al conectarse al servidor');
        this.estadoRegistro = 'Error en el Registro';
        this.infoRegistro = 'Error al conectarse al servidor.';
        this.estadoRegistroFlag = false;
      }
        })
    }else{
      this.estadoRegistro='Error en el Registro'
      this.infoRegistro=`Faltan los siguientes campos por llenar: ${camposFaltantes.join(', ')}`;
      this.estadoRegistroFlag=false
      console.log("Error en el Registro")
    }
    
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
    this.mensajeAlerta = mensaje;
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
      case 'filesDocuments':
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
  loadPdf3FromDevice(event:any) {
    const file: File = event.target.files[0];
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.documentsPendientes=file;
        this.filePDF3 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
      return null;

    } catch (e) {
      return null;
    }
  });

  loadImageFromDevice(event:any) {
    const file: File = event.target.files[0];
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.foto=file;
        this.fileImgPerfil = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

  loadImageFromDeviceCI(event:any) {
    const file: File = event.target.files[0];
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.copiaCedula=file;
        this.fileImgPerfil1 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

  loadImageFromDeviceLI(event:any) {
    const file: File = event.target.files[0];
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.copiaLicencia=file;
        this.fileImgPerfil2 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

  loadImageFromDeviceDocCurri(event:any) {
    const file: File = event.target.files[0];
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.documentsPendientes=file;
        this.fileImgPerfil3 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

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

  
  loadPdfFromDeviceCI(event:any) {
    const file: File = event.target.files[0];
    console.log("Archivo de Copia de Cedula")
    console.log(event.target.files)
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.copiaCedula=file;
        this.filePDF1 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };


  loadPdfFromDeviceLI(event:any) {
    const file: File = event.target.files[0];
    console.log("Archivo de Copia de Licencia")
    console.log(event.target.files)
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.copiaLicencia=file;
        this.filePDF2 = file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

  loadPdfFromDeviceDocCurri(event:any) {
    const file: File = event.target.files[0];
    console.log("Archivo de Copia de Curriculum")
    console.log(event.target.files)
    if(file){
      this.extraerBase64(file)
      .then((imagen: any) => {
        this.formEdit.value.documentsPendientes=file;
        this.filePDF3= file;
        // this.imgPerfil = imagen.base;
      })
      .catch(err => console.log(err));
    }
  };

  
  loadFileFromDevice(event: any, formField: string) {
    const file: File = event.target.files[0];  
    if (file) {
      const fileType = file.type;  
      if(formField== 'copiaCedula'){
        if (fileType.includes('image')) {
          this.loadImageFromDeviceCI(event); 
          console.log("Archivo Cedula image")
        } else if (fileType === 'application/pdf') {
          this.loadPdfFromDeviceCI(event); 
          console.log("Archivo Cedula pdf")
        } 
      }else if(formField== 'copiaLicencia'){
        if (fileType.includes('image')) {
          this.loadImageFromDeviceLI(event); 
          console.log("Archivo Licencia image")
        } else if (fileType === 'application/pdf') {
          this.loadPdfFromDeviceLI(event); 
          console.log("Archivo Licencia pdf")
        } 
      }else if(formField== 'curriculum'){
        if (fileType.includes('image')) {
          this.loadImageFromDeviceDocCurri(event); 
          console.log("Archivo Curriculum image")
        } else if (fileType === 'application/pdf') {
          this.loadPdfFromDeviceDocCurri(event); 
          console.log("Archivo Currilculum pdf")
        } 
      }   
    }
  } 

  getNombreArchivo(tipo: string): string {
    const { nombres, apellidos } = this.pendiente_seleccionada || {};
    
    const archivoUrl = this.pendiente_seleccionada?.[tipo]; 
    const extension = archivoUrl ? archivoUrl.split('.').pop() : 'pdf'; 
  
    if (!nombres || !apellidos) {
      return 'archivo_descargado';
    }
  
    return `${nombres}_${apellidos}_${tipo}.${extension}`;
  }
  

  refresh(): void {
    window.location.reload();
  }
}

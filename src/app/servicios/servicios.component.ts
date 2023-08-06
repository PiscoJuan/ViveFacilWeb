import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  profesiones: any[] = [];

  constructor(private formService: FormularioService,) { 
    this.formService.getServicios().subscribe((resp: any) => {
      console.log("resp")
      console.log(resp)
        this.profesiones= resp
    }); 
  }

  ngOnInit(): void {
  }

}

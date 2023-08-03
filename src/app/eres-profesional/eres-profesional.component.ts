import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-eres-profesional',
  templateUrl: './eres-profesional.component.html',
  styleUrls: ['./eres-profesional.component.scss']
})
export class EresProfesionalComponent implements OnInit {
  servicios: any[] = [];
  constructor(private formService: FormularioService) { 

    this.formService.getServicios().subscribe((resp: any) => {
      console.log(resp)
        this.servicios= resp
    }); 
  }
  ngOnInit(): void {
  }
}  
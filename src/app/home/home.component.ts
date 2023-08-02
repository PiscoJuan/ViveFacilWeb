import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

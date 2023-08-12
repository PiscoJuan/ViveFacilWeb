import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';
import * as bootstrap from 'bootstrap';

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
    const modal = document.getElementById('myModal');
    // Check if the modal element exists and has the 'modal' class
    if (modal && modal.classList.contains('modal')) {
        // Create a new Bootstrap Modal instance
        const bsModal = new bootstrap.Modal(modal);
        // Show the modal
        bsModal.show();
    }
  }
  refresh(): void {
    window.location.reload();
  }

}

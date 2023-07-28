import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Modal } from 'bootstrap';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

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
  

}

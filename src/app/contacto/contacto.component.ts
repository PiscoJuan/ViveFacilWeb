import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   function ubicacion(nombre: string, latitud: number, longitud: number): void {
  //     const nombreLocal = document.getElementById("texto-modal");
  //     console.log(nombreLocal);
  //     if (nombreLocal) {
  //         nombreLocal.innerHTML = nombre;
  //     }
  
  //     const contenedorMapa = document.getElementById('contenedor-mapa');
  //     if (contenedorMapa) {
  //         contenedorMapa.innerHTML = "<div id='mapa'></div>";
  //         const map = L.map('mapa').setView([latitud, longitud], 18);
  
  //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //             maxZoom: 18
  //         }).addTo(map);
  
  //         const marker = new L.Marker([latitud, longitud]).addTo(map);
  //     }
  // }
  }

}

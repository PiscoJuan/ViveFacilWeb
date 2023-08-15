import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map:any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -2.17050, -79.90884 ],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    
    var greenIcon = L.icon({
      iconUrl: 'assets/imagenes/pinRed.png',
  
      iconSize:     [50, 50], // size of the icon
      iconAnchor:   [22, 62], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var marker = L.marker([ -2.17050, -79.90884 ], {icon: greenIcon}).addTo(this.map);

  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.scss']
})
export class FuncionComponent implements OnInit {
  direccionNums="assets/imagenes/num1.png"
  direccionNums1="assets/imagenes/iconNumeros/0101.png"
  direccionNums2="assets/imagenes/iconNumeros/02.png"
  direccionNums3="assets/imagenes/iconNumeros/03.png"
  direccionNums4="assets/imagenes/iconNumeros/04.png"
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
    
      const sections = document.querySelectorAll('div[id^="part"]'); // Seleccionar todas las secciones con IDs que empiecen por "section"
    
      let currentSectionId = '';
      sections.forEach((section) => {
        let sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop-10) {
          currentSectionId = section.getAttribute('id') || '';
        }
      });
      const el = document.getElementById('body4');
      console.log('Sección actual:', currentSectionId);
      if(currentSectionId == "part1"){
        this.direccionNums1="assets/imagenes/iconNumeros/0101.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
      }else if(currentSectionId == "part2"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/0202.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
      }else if(currentSectionId == "part3"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/0303.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
      }else if(currentSectionId == "part4"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/0404.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        
      }
      if(currentSectionId == "part5"){
        if (el != null) {
          el.style.visibility = 'hidden';
        }
      }
    });
  }
  

}
// <script>
//   window.addEventListener('scroll', function() {
//     // Obtener la posición vertical actual del usuario en la página
//     const scrollPosition = window.scrollY;

//     // Obtener las posiciones de las secciones
//     const introduccionPosition = document.getElementById('introduccion').offsetTop;
//     const finalPosition = document.getElementById('final').offsetTop;

//     // Calcular el índice de la sección actual
//     const totalSections = 10; // El total de secciones en tu página
//     const sectionHeight = (finalPosition - introduccionPosition) / (totalSections - 1);
//     const currentSectionIndex = Math.min(
//       totalSections,
//       Math.floor((scrollPosition - introduccionPosition) / sectionHeight) + 1
//     );

//     // Actualizar el número en tu elemento HTML
//     document.getElementById('numero').textContent = currentSectionIndex.toString();
//   });
// </script>
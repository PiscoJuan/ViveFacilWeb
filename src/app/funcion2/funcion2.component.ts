import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcion2',
  templateUrl: './funcion2.component.html',
  styleUrls: ['./funcion2.component.scss']
})
export class Funcion2Component implements OnInit {
  direccionNums="assets/imagenes/num1.png"
  direccionNums1="assets/imagenes/iconNumeros/0101.png"
  direccionNums2="assets/imagenes/iconNumeros/02.png"
  direccionNums3="assets/imagenes/iconNumeros/03.png"
  direccionNums4="assets/imagenes/iconNumeros/04.png"
  direccionNums5="assets/imagenes/iconNumeros/05.png"
  direccionNums6="assets/imagenes/iconNumeros/06.png"
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
    
      const sections = document.querySelectorAll('div[id^="part"]'); // Seleccionar todas las secciones con IDs que empiecen por "section"
      let tempSectionId = '';
      let currentSectionId = '';
      var p1=0
        var p2=0
        var p3=0
        var p4=0
        var p5=0
        var p6=0
        var p7=0
      sections.forEach((section) => {
        let sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop-100) {
          tempSectionId = section.getAttribute('id') || '';
          if(tempSectionId == "part1"){
            p1=p1+1
            if(p1>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part2"){
            p2=p2+1
            if(p2>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part3"){
            p3=p3+1
            if(p3>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part4"){
            p4=p4+1
            if(p4>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part5"){
            p5=p5+1
            if(p5>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part6"){
            p6=p6+1
            if(p6>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }if(tempSectionId == "part7"){
            p7=p7+1
            if(p7>1){
              currentSectionId = section.getAttribute('id') || '';
            }
          }
        }
      });
      const el = document.getElementById('body4');
      const elementosBod2 = document.getElementsByClassName('body2');
      if(currentSectionId == "part1"){
        this.direccionNums1="assets/imagenes/iconNumeros/0101.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        this.direccionNums5="assets/imagenes/iconNumeros/05.png"
        this.direccionNums6="assets/imagenes/iconNumeros/06.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }else if(currentSectionId == "part2"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/0202.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        this.direccionNums5="assets/imagenes/iconNumeros/05.png"
        this.direccionNums6="assets/imagenes/iconNumeros/06.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }else if(currentSectionId == "part3"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/0303.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        this.direccionNums5="assets/imagenes/iconNumeros/05.png"
        this.direccionNums6="assets/imagenes/iconNumeros/06.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }else if(currentSectionId == "part4"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/0404.png"
        this.direccionNums5="assets/imagenes/iconNumeros/05.png"
        this.direccionNums6="assets/imagenes/iconNumeros/06.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }else if(currentSectionId == "part5"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        this.direccionNums5="assets/imagenes/iconNumeros/0505.png"
        this.direccionNums6="assets/imagenes/iconNumeros/06.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }else if(currentSectionId == "part6"){
        this.direccionNums1="assets/imagenes/iconNumeros/01.png"
        this.direccionNums2="assets/imagenes/iconNumeros/02.png"
        this.direccionNums3="assets/imagenes/iconNumeros/03.png"
        this.direccionNums4="assets/imagenes/iconNumeros/04.png"
        this.direccionNums5="assets/imagenes/iconNumeros/05.png"
        this.direccionNums6="assets/imagenes/iconNumeros/0606.png"
        if (el != null) {
          el.style.visibility = 'visible';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "block";
        }
      }
      if(currentSectionId == "part7"){
        if (el != null) {
          el.style.visibility = 'hidden';
        }
        var index = 0, length = elementosBod2.length;
        for ( ; index < length; index++) {
          const eltemp= elementosBod2[index] as HTMLElement
          eltemp.style.display = "none";
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
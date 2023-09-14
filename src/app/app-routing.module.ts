import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EresProfesionalComponent } from './eres-profesional/eres-profesional.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TerminoComponent } from './termino/termino.component';
import { ComoFunciona2Component } from './como-funciona2/como-funciona2.component';
import { LucesComponent } from './blogs/luces/luces.component';
import { CasosExitoComponent } from './blogs/casos-exito/casos-exito.component';
import { MejorOpcionComponent } from './blogs/mejor-opcion/mejor-opcion.component';
import { OptimasCondicionesComponent } from './blogs/optimas-condiciones/optimas-condiciones.component';
import { ConfianzaComponent } from './blogs/confianza/confianza.component';
import { EconomiaLocalComponent } from './blogs/economia-local/economia-local.component';
import { NueveServiciosComponent } from './blogs/nueve-servicios/nueve-servicios.component';
import { PrestadorComponent } from './blogs/prestador/prestador.component';
import { ProfesionalAdecuadoComponent } from './blogs/profesional-adecuado/profesional-adecuado.component';
import { SolucionEmprendedoresComponent } from './blogs/solucion-emprendedores/solucion-emprendedores.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'formulario' , component: FormularioComponent},
  {path: 'comofunciona' , component: ComoFuncionaComponent},
  {path: 'comofunciona2' , component: ComoFunciona2Component},
  {path: 'eresprofesional' , component: EresProfesionalComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'servicio' , component: ServiciosComponent},
  {path: 'termino' , component: TerminoComponent},
  {path: 'blogs/luces' , component: LucesComponent},
  {path: 'blogs/casos-exito' , component: CasosExitoComponent},
  {path: 'blogs/mejor-opcion' , component: MejorOpcionComponent},
  {path: 'blogs/optimas-condiciones' , component: OptimasCondicionesComponent},
  {path: 'blogs/confianza' , component: ConfianzaComponent},
  {path: 'blogs/economia-local' , component: EconomiaLocalComponent},
  {path: 'blogs/nueve-servicios' , component: NueveServiciosComponent},
  {path: 'blogs/prestador' , component: PrestadorComponent},
  {path: 'blogs/profesional-adecuado' , component: ProfesionalAdecuadoComponent},
  {path: 'blogs/solucion-emprendedores' , component: SolucionEmprendedoresComponent},
  // {path: 'contact/:id' , component: ContactDetailComponent}
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

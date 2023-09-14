import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EresProfesionalComponent } from './eres-profesional/eres-profesional.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FuncionComponent } from './funcion/funcion.component';
import { MapComponent } from './map/map.component';
import { TerminoComponent } from './termino/termino.component';
import { ComoFunciona2Component } from './como-funciona2/como-funciona2.component';
import { Funcion2Component } from './funcion2/funcion2.component';
import { LucesComponent } from './blogs/luces/luces.component';
import { MejorOpcionComponent } from './blogs/mejor-opcion/mejor-opcion.component';
import { OptimasCondicionesComponent } from './blogs/optimas-condiciones/optimas-condiciones.component';
import { CasosExitoComponent } from './blogs/casos-exito/casos-exito.component';
import { EconomiaLocalComponent } from './blogs/economia-local/economia-local.component';
import { NueveServiciosComponent } from './blogs/nueve-servicios/nueve-servicios.component';
import { PrestadorComponent } from './blogs/prestador/prestador.component';
import { ProfesionalAdecuadoComponent } from './blogs/profesional-adecuado/profesional-adecuado.component';
import { SolucionEmprendedoresComponent } from './blogs/solucion-emprendedores/solucion-emprendedores.component';
import { ConfianzaComponent } from './blogs/confianza/confianza.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    FormularioComponent,
    ComoFuncionaComponent,
    EresProfesionalComponent,
    ServiciosComponent,
    ContactoComponent,
    FuncionComponent,
    MapComponent,
    TerminoComponent,
    ComoFunciona2Component,
    Funcion2Component,
    LucesComponent,
    MejorOpcionComponent,
    OptimasCondicionesComponent,
    CasosExitoComponent,
    EconomiaLocalComponent,
    NueveServiciosComponent,
    PrestadorComponent,
    ProfesionalAdecuadoComponent,
    SolucionEmprendedoresComponent,
    ConfianzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

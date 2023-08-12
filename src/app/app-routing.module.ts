import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EresProfesionalComponent } from './eres-profesional/eres-profesional.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'formulario' , component: FormularioComponent},
  {path: 'comofunciona' , component: ComoFuncionaComponent},
  {path: 'eresprofesional' , component: EresProfesionalComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'servicio' , component: ServiciosComponent},
  // {path: 'contact/:id' , component: ContactDetailComponent}
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

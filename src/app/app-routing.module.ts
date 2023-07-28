import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'formulario' , component: FormularioComponent},
  // {path: 'contact/:id' , component: ContactDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

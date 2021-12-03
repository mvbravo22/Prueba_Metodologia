import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAutoComponent } from './components/crear-auto/crear-auto.component';
import { ListarAutoComponent } from './components/listar-auto/listar-auto.component';

const routes: Routes = [
 //Cuando este vacio el enlace se valla directo al componente listar auto.
  {path: '', component: ListarAutoComponent},
  //Cuando se le da a crear auto se lleva a la vista crear auto.
  {path: 'crear-auto', component: CrearAutoComponent},
  //redirige al componente de editar auto/ este cambio por el paso del parametro ID.
  {path: 'editar-auto/:id', component: CrearAutoComponent},
  //redirecciona a la pestaña principal/raiz
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

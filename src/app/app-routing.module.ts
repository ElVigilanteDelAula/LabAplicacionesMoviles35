import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaClientesComponent } from './clientes/alta-clientes/alta-clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';

const routes : Routes =[
  {path:'altaClientes', component: AltaClientesComponent},
  {path:'listadoClientes', component: ListaClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

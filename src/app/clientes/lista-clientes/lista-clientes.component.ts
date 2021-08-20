import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Grupo, Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit, OnDestroy {

  clientes$: Observable<Cliente[]> = new Observable<Cliente[]>();
  clientesSubscripcion: Subscription = new Subscription
  clientes: Cliente[] = [

  ];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientesSubscripcion = this.clientes$.subscribe((response:Cliente[])=>{
      this.clientes = response;
    });
  }

  ngOnDestroy(){
    this.clientesSubscripcion.unsubscribe();
  }
  doBorrarCliente(cliente: Cliente){
    console.log('yeah',cliente)
    this.clientesService.borrarCliente(cliente);
  }
}

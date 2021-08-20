import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente,Grupo } from '../cliente.model';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent implements OnInit {

  cliente: Cliente= 
  {
    id: 0,
    nombre: '',
    curp: '',
    direccion: '',
    sexo: 0
  };
  grupos: Grupo[] = [];

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }
  nuevoCliente(): void{
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

}

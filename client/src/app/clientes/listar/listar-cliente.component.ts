import { Component, OnInit } from '@angular/core';
import {Cliente, ClienteService, PaginatedCliente} from "../shared";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.clienteService.listarTodos()
      .subscribe((data: PaginatedCliente) => {
        this.clientes = data.content;
      });
  }

}

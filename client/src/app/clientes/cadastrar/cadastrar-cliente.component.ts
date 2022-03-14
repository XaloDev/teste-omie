import {Component, OnInit, ViewChild} from '@angular/core';
import {Cliente, ClienteService} from "../shared";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  @ViewChild('formCliente', {static: true}) formCliente: NgForm;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  cadastrar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.cadastrar(this.cliente).subscribe(cliente => {
        this.router.navigate(["/clientes/listar"]);
      });
    }
  }

}

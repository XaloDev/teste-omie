import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Cliente, ClienteService} from "../shared";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  @ViewChild('formCliente', {static: true}) formCliente: NgForm;
  cliente: Cliente;

  modalVisivel: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    let id = +this.route.snapshot.params['id'];
    this.clienteService.buscarPorId(id)
      .subscribe((data: Cliente) => {
        if (data) {
          this.cliente = data;
        } else {
          this.router.navigate(["/clientes/listar"]);
        }
      })
  }

  editar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente).subscribe(cliente => {
        this.router.navigate(["/clientes/listar"]);
      });
    }
  }

  remover(): void {
    let id = +this.route.snapshot.params['id'];
    this.clienteService.remover(id).subscribe(data => {
      this.router.navigate(["/clientes/listar"]);
    });
  }

  mudarVisibilidadeDoModal(): void {
    this.modalVisivel = !this.modalVisivel;
  }


}

import { Component, OnInit } from '@angular/core';
import { ClienteService, PaginatedCliente} from "../shared";

interface PaginationOptions {
  size?: number,
  page?: number
}

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})

export class ListarClienteComponent implements OnInit {


  paginatedCliente: PaginatedCliente;
  pages: number[] = [];
  size: number = 5;
  loading: boolean = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodos({size: this.size, page: 0});
  }

  listarTodos(options?: PaginationOptions): void {
    this.loading = true;
    if(options.page + 1 > this.paginatedCliente?.totalPages){
      if(options.page !== 0){
        options.page--;
      }
    }
    if (options.page < 0) {
      options.page = 0;
    }

    if ((options.page === this.paginatedCliente?.number) && (this.paginatedCliente?.size === this.size)) {
      return
    }
    this.clienteService.listarTodos(options)
      .subscribe((paginatedCliente: PaginatedCliente) => {
        this.paginatedCliente = paginatedCliente;
        this.size = paginatedCliente.size
        this.pages = []
        for (let i = 1; i <= paginatedCliente.totalPages; i++) {
          this.pages.push(i);
        }
        this.loading = false;
      });
  }

  onChangeSize(event){
    this.size = +event.target.value
    this.listarTodos({size: this.size, page: 0})
  }

}

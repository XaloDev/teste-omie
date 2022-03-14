import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Cliente, ClienteService} from "../shared";
import {ActivatedRoute, Router} from "@angular/router";
import {Categoria, CategoriaService} from "../../categorias";


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  @ViewChild('formCliente', {static: true}) formCliente: NgForm;
  cliente: Cliente;

  categorias: Categoria[] = []

  categoriaNome: string = ''

  modalVisivel: boolean = false;

  listarCategoriaVisivel: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
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

  listarCategorias(){
    this.categoriaService.listarTodos()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias
      })
  }

  mudarVisibilidadeDoModal(): void {
    this.modalVisivel = !this.modalVisivel;
  }

  mudarVisibilidadeDoListarCategoria():void {
    this.categoriaNome = ""
    if(!this.listarCategoriaVisivel){
      this.listarCategorias()
    }
    this.listarCategoriaVisivel = !this.listarCategoriaVisivel
  }

  removerCategoria(id: number): void {
    this.categoriaService.remover(id)
      .subscribe((data: any) => {
        this.listarCategorias()
      })
  }

  adicionarCategoria(): void {
    this.categoriaService.cadastrar(new Categoria(null, this.categoriaNome))
      .subscribe((categoria: Categoria) => {
        this.categoriaNome = ""
        this.listarCategorias()
      })
  }


}

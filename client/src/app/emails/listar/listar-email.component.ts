import {Component, OnInit, ViewChild} from '@angular/core';
import {Email, EmailService} from "../shared";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Categoria, CategoriaService} from "../../categorias";

@Component({
  selector: 'app-listar-email',
  templateUrl: './listar-email.component.html',
  styleUrls: ['./listar-email.component.scss']
})
export class ListarEmailComponent implements OnInit {

  @ViewChild('formEmail', {static: true}) formCliente: NgForm;
  emails: Email[] = [];
  emailInstance: Email;
  categorias: Categoria[] = [];
  categoriaId: number;
  modalCadastrarEmailVisivel: boolean = false;
  modalEditarEmailVisivel: boolean = false;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    let id = +this.route.snapshot.params['id'];
    this.emailService.listarTodos(id)
      .subscribe((emails: Email[]) => {
        this.emails = emails;
      });
  }

  listarTodasCategorias(): void {
    this.categoriaService.listarTodos()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias
      })
  }

  mudarVisibilidadeDoModal() {
    this.emailInstance = new Email(null, null, null, new Categoria(0));
    if(!this.modalCadastrarEmailVisivel){
      this.listarTodasCategorias()
    }
    this.modalCadastrarEmailVisivel = !this.modalCadastrarEmailVisivel;
  }

  cadastrar() {
    let clienteId = +this.route.snapshot.params['id'];
    this.emailService.cadastrar(this.emailInstance, clienteId)
      .subscribe((email: Email) => {
        this.listarTodos();
        this.mudarVisibilidadeDoModal();
      })
  }

  editar() {
    this.emailService.atualizar(this.emailInstance)
      .subscribe((email: Email) => {
        this.listarTodos();
        this.mudarVisibilidadeDoModalEditar()
      })
  }

  remover(id: number) {
    this.emailInstance = new Email(null, null, null, new Categoria(0));
    this.emailService.remover(id)
      .subscribe((data: any) => {
        this.listarTodos();
      })
  }

  mudarVisibilidadeDoModalEditar(id?: number){
    if (!this.modalEditarEmailVisivel){
      this.emailService.buscarPorId(id)
        .subscribe((email: Email) => {
          this.emailInstance = email
          this.listarTodasCategorias()
          this.modalEditarEmailVisivel = !this.modalEditarEmailVisivel;
        })
    } else {
      this.modalEditarEmailVisivel = !this.modalEditarEmailVisivel;
    }

  }



}

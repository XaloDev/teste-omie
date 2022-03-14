import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../environments/constants";
import {Categoria} from "./Categoria.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = Constants.CATEGORIAS_PATH

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }

  cadastrar(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.categoriasUrl, categoria);
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.categoriasUrl + '/' + id);
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.put(this.categoriasUrl + "/" + categoria.id, categoria);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(this.categoriasUrl + "/" + id);
  }
}

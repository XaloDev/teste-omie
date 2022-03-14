import { Injectable } from '@angular/core';
import {Cliente, PaginatedCliente} from "./";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientesUrl = 'http://localhost:8080/clientes';


  constructor(private http: HttpClient) { }

  listarTodos(): Observable<PaginatedCliente> {
    return this.http.get<PaginatedCliente>(this.clientesUrl);
  }

  listarTodoss(): Cliente[] {
    const clientes = localStorage['clientes'];
    return clientes ? JSON.parse(clientes) : [];
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.clientesUrl, cliente);
  }

  buscarPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.clientesUrl + '/' + id);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put(this.clientesUrl + "/" + cliente.id, cliente);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(this.clientesUrl + "/" + id);
  }

}

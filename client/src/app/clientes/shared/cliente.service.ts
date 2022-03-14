import { Injectable } from '@angular/core';
import {Cliente, PaginatedCliente} from "./";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Constants} from "../../../environments/constants";

interface PaginationOptions {
  size?: number,
  page?: number
}

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  clientesUrl = Constants.CLIENTES_PATH;


  constructor(private http: HttpClient) { }

  listarTodos(options?: PaginationOptions): Observable<PaginatedCliente> {
    let requestUrl = this.clientesUrl
    requestUrl = requestUrl + "?size=" + (typeof options.size === 'number' ? options.size.toString() : '')
    requestUrl = requestUrl + "&page=" + (typeof options.page === 'number' ? options.page.toString() : '')
    return this.http.get<PaginatedCliente>(requestUrl);
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

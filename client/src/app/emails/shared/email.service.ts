import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Email} from "./Email.model";
import {Constants} from "../../../environments/constants";

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  emailsUrl =  Constants.EMAILS_PATH;


  constructor(private http: HttpClient) { }

  listarTodos(id?: number): Observable<Email[]> {
    if (typeof id === "number"){
      return this.http.get<Email[]>(this.emailsUrl + "?clienteId=" + id)
    } else {
      return this.http.get<Email[]>(this.emailsUrl);
    }
  }

  cadastrar(email: Email, clienteId: number): Observable<Email> {
    let requestUrl = this.emailsUrl + "?clienteId=" + clienteId + "&categoriaId=" + email.categoria.id
    delete email.categoria
    return this.http.post(requestUrl, email);
  }

  buscarPorId(id: number): Observable<Email> {
    return this.http.get<Email>(this.emailsUrl + '/' + id);
  }

  atualizar(email: Email): Observable<Email> {
    return this.http.put(this.emailsUrl + "/" + email.id + "?categoriaId=" + email.categoria.id, email);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(this.emailsUrl + "/" + id);
  }
}

import {Categoria} from "../../categorias";

export class Email {

  constructor(
    public id?: number,
    public nome?: string,
    public email?: string,
    public categoria?: Categoria
  ) {
  }
}

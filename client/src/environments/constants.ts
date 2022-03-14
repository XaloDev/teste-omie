import {isDevMode} from "@angular/core";

export class Constants{

  public static DB_BASE_URL = isDevMode() ? 'http://localhost:8080/' : 'https://teste-omie-dev.herokuapp.com/';

  public static CLIENTES_PATH = Constants.DB_BASE_URL + 'clientes'
  public static CATEGORIAS_PATH = Constants.DB_BASE_URL + 'categorias'
  public static EMAILS_PATH = Constants.DB_BASE_URL + 'emails'


  constructor (){ }

}


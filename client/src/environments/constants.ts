import {environment} from "./environment";

export class Constants{

  public static DB_BASE_URL = environment.production ? 'https://teste-omie-dev.herokuapp.com/' : 'http://localhost:8080/';

  public static CLIENTES_PATH = Constants.DB_BASE_URL + 'clientes'
  public static CATEGORIAS_PATH = Constants.DB_BASE_URL + 'categorias'
  public static EMAILS_PATH = Constants.DB_BASE_URL + 'emails'


  constructor (){ }

}


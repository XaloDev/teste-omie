import { Routes } from "@angular/router";

import { ListarClienteComponent } from "./listar";
import {CadastrarClienteComponent} from "./cadastrar";
import {EditarClienteComponent} from "./editar";

export const ClienteRoutes: Routes = [
  {
    path: 'clientes',
    redirectTo: 'clientes/listar'
  },
  {
    path: 'clientes/listar',
    component: ListarClienteComponent
  },
  {
    path: 'clientes/cadastrar',
    component: CadastrarClienteComponent
  },
  {
    path: 'clientes/editar/:id',
    component: EditarClienteComponent
  },

]

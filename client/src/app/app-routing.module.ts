import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteRoutes } from "./clientes";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes/listar',
    pathMatch: 'full'
  },
  ...ClienteRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

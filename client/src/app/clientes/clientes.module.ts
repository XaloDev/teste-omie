import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ClienteService } from "./shared";
import { ListarClienteComponent } from './listar';
import { CadastrarClienteComponent } from './cadastrar';
import { EditarClienteComponent } from './editar';
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    ListarClienteComponent,
    CadastrarClienteComponent,
    EditarClienteComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgxMaskModule
    ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }

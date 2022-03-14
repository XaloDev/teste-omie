import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmailComponent } from './listar';
import {EmailService} from "./shared";
import {FormsModule} from "@angular/forms";
import {CategoriaService} from "../categorias";



@NgModule({
  declarations: [
    ListarEmailComponent
  ],
  exports: [
    ListarEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EmailService,
    CategoriaService
  ]
})
export class EmailsModule { }

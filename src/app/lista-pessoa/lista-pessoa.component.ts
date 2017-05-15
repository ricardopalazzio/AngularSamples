import { Component, OnInit } from '@angular/core';

import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[];
  nome: string = "Palazzio"

  constructor(private pessoaService : PessoaServiceService) {
      this.pessoas  = pessoaService.getPessoas();
   }

  ngOnInit() {
  }

  enviarNome(){
    this.pessoaService.setPessoa(this.nome);
  }
  listar(){

  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas : string[]  = ['Palazzio' , 'Teste' , 'Zika de angular', 'Minions', 'Eworks', 'servico'];
  constructor() { }

  getPessoas(): string[]{
     return  this.nomesPessoas;
  }

  setPessoa(nome :string){
    this.nomesPessoas.push(nome);
  }
}

import { Component } from '@angular/core';

import {AlertaService} from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testes Eworks Angular!';
  foto: string = 'favicon.ico';
  desenvolvimento: string [] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  valor: string;

 constructor(private service: AlertaService){

 }

 enviarMsg():void{
   this.service.msgAlerta();
 }
 
 addValor(valor: string): void{
   this.desenvolvimento.push(valor);
 }

   valorPassado(valorPassado){
    this.valor = valorPassado;
  }
}

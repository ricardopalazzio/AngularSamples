import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  mostraNome: boolean = false;
  cursos: string[]  = [];
  constructor() { }

  ngOnInit() {
  }

  mostrar(): void {
    this.mostraNome = !this.mostraNome;
  }
  getValor(): boolean {
    return this.mostraNome;
  }

  addCurso():void{
     this.cursos.push("Speak with Eworks"); 
  }

}

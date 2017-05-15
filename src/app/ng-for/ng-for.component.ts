  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.css']
  })
  export class NgForComponent implements OnInit {

    nomes: any[] = [{
      id: 1, nome: "Palazzio"
    },
    { id: 2, nome: "Eworks" }, {

      idd: 3, nome: "DV"
    }
      , { id: 4, nome: "SkyWalker" }]
    constructor() { }

    ngOnInit() {
    }

    meuSave(index: number, nomes: any) {
      return nomes.id;
    }

  }

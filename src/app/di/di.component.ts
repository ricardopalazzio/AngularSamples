import { Component, OnInit } from '@angular/core';
import { NomesTecService } from "app/di/nomes-tec.service";
import { MeuLogService } from "app/di/meu-log.service";

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class DiComponent implements OnInit {

  tecnologias: string[] = [];

 
  constructor(private meuService: NomesTecService) { 
    this.tecnologias = this.meuService.getNomesTec();
  }

  ngOnInit() {
  }

}

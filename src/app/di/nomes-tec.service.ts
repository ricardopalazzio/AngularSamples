import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from "app/di/meu-log.service";

@Injectable()
export class NomesTecService {

  constructor(@Optional() private meuLog: MeuLogService) {

   }

  getNomesTec(): string[] {
    if(this.meuLog) {
      this.meuLog.setLog('consultou o array de tecnologias');
    }
    return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2'];
}
}

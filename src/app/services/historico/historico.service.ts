import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRestaurante } from 'src/app/models/Irestaurante';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historicoEdicoes: IRestaurante[] = [];
  historicoEdicoes$ = new BehaviorSubject<IRestaurante[]>(
    this.historicoEdicoes
  );

  adicionarEdicao(restaurante: IRestaurante) {
    this.historicoEdicoes.push({ ...restaurante });
    this.historicoEdicoes$.next(this.historicoEdicoes);
  }

  limparHistorico(): void {
    this.historicoEdicoes = [];
  }
}

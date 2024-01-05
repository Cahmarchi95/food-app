import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRestaurante } from 'src/app/models/Irestaurante';
import { HistoricoService } from '../historico/historico.service';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  private restaurantesSource = new BehaviorSubject<IRestaurante[]>([]);
  restaurantes$ = this.restaurantesSource.asObservable();

  constructor(private historicoService: HistoricoService) {}

  adicionarRestaurante(restaurante: IRestaurante) {
    const restaurantesAtuais = this.restaurantesSource.getValue();
    const novoRestaurante = { ...restaurante, id: Date.now() };
    const novosRestaurantes = [...restaurantesAtuais, novoRestaurante];
    this.restaurantesSource.next(novosRestaurantes);
  }

  removerRestaurante(index: number) {
    const restaurantesAtuais = this.restaurantesSource.getValue();
    const novosRestaurantes = [...restaurantesAtuais];
    novosRestaurantes.splice(index, 1);
    this.restaurantesSource.next(novosRestaurantes);
  }

  atualizarRestaurante(restauranteAtualizado: IRestaurante) {
    const restaurantesAtuais = this.restaurantesSource.getValue();
    const index = restaurantesAtuais.findIndex(
      (r) => r.id === restauranteAtualizado.id
    );

    if (index !== -1) {
      const novosRestaurantes = [...restaurantesAtuais];
      const dataHoraEdicao = new Date();
      novosRestaurantes[index] = { ...restauranteAtualizado, dataHoraEdicao };
      this.restaurantesSource.next(novosRestaurantes);
      this.historicoService.adicionarEdicao(novosRestaurantes[index]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { IRestaurante } from 'src/app/models/Irestaurante';
import { HistoricoService } from 'src/app/services/historico/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: [],
})
export class HistoricoComponent implements OnInit {
  historicoEdicoes: IRestaurante[] = [];
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'categoria', header: 'Categoria' },
    { field: 'quantidade', header: 'Quantidade' },
    { field: 'endereco', header: 'Endereço' },
    { field: 'dataHoraEdicao', header: 'Data e Hora da Edição' },
  ];

  constructor(private historicoService: HistoricoService) {}

  ngOnInit() {
    this.historicoService.historicoEdicoes$.subscribe((historico) => {
      this.historicoEdicoes = historico;
    });
  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
    this.historicoEdicoes = [];
  }
}

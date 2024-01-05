import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurantes/restaurantes.service';
import { IRestaurante } from 'src/app/models/Irestaurante';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [],
})
export class TableComponent implements OnInit {
  restaurantes: IRestaurante[] = [];
  editRestauranteForm!: FormGroup;
  indexEdicao: number | null = null;

  constructor(
    private restauranteService: RestauranteService,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.restauranteService.restaurantes$.subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    });

    this.editRestauranteForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: [null, Validators.required],
      quantidade: ['', Validators.required],
      endereco: [''],
    });
  }

  ExcluirRestaurante(restaurante: IRestaurante) {
    const index = this.restaurantes.indexOf(restaurante);
    if (index !== -1) {
      this.restauranteService.removerRestaurante(index);
    }
  }

  EditarRestaurante(restaurante: IRestaurante) {
    const ref = this.dialogService.open(EditFormComponent, {
      header: 'Editar Restaurante',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      data: { restauranteData: restaurante }, // Passa os dados do restaurante para o componente de edição
    });

    ref.onClose.subscribe((data) => {
      console.log('Modal fechado com os dados:', data);
    });
  }
}

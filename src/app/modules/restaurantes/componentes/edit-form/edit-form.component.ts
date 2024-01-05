import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IRestaurante } from 'src/app/models/Irestaurante';
import { RestauranteService } from 'src/app/services/restaurantes/restaurantes.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: [],
})
export class EditFormComponent implements OnInit {
  editRestauranteForm!: FormGroup;
  selectedCategory!: string;
  categorias = [
    { label: 'Fast-food', value: 'fast-food' },
    { label: 'Brasileira', value: 'brasileira' },
    { label: 'Mexicana', value: 'mexicana' },
    { label: 'Japonesa', value: 'japonesa' },
    { label: 'Italiana', value: 'italiana' },
    { label: 'Árabe', value: 'arabe' },
    { label: 'Outros', value: 'outros' },
  ];

  constructor(
    private fb: FormBuilder,
    private restauranteService: RestauranteService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.editRestauranteForm = this.fb.group({
      nome: [this.dialogConfig.data.restauranteData.nome, Validators.required],
      categoria: [
        this.dialogConfig.data.restauranteData.categoria,
        Validators.required,
      ],
      quantidade: [
        this.dialogConfig.data.restauranteData.quantidade,
        Validators.required,
      ],
      endereco: [this.dialogConfig.data.restauranteData.endereco],
    });
  }

  handleSubmitEditRestaurante() {
    const restauranteEditado: IRestaurante = {
      ...this.dialogConfig.data.restauranteData,
      ...this.editRestauranteForm.value,
    };

    this.restauranteService.atualizarRestaurante(restauranteEditado);

    this.dialogRef.close();
  }
}

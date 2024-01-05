import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestauranteService } from 'src/app/services/restaurantes/restaurantes.service';
import { IRestaurante } from 'src/app/models/Irestaurante';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [],
})
export class FormComponent implements OnInit {
  addRestauranteForm!: FormGroup;
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
    this.addRestauranteForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: [null, Validators.required],
      quantidade: ['', Validators.required],
      endereco: [''],
    });
  }

  handleSubmitAddRestaurante() {
    const restaurante: IRestaurante = this.addRestauranteForm.value;
    this.restauranteService.adicionarRestaurante(restaurante);
    this.addRestauranteForm.reset();
    this.dialogRef.close();
  }
}

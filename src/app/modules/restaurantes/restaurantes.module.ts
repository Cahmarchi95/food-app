import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RESTAURANTES_ROUTES } from './restaurantes.routing';
import { FormComponent } from './componentes/form/form.component';
import { TableComponent } from './componentes/table/table.component';
import { RestauranteHomeComponent } from './pages/restaurante-home/restaurante-home.component';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EditFormComponent } from './componentes/edit-form/edit-form.component';

@NgModule({
  declarations: [
    RestauranteHomeComponent,
    FormComponent,
    TableComponent,
    ToolbarComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RESTAURANTES_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //PrimeNg
    ToolbarModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    TableModule,
    TooltipModule,
  ],
  providers: [DialogService],
})
export class RestaurantesModule {}

import { Routes } from '@angular/router';
import { RestauranteHomeComponent } from './pages/restaurante-home/restaurante-home.component';

export const RESTAURANTES_ROUTES: Routes = [
  {
    path: '',
    component: RestauranteHomeComponent,
  },
];

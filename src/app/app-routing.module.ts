import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './services/guard/auth-guard';
import { UserService } from './services/users/user.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HistoricoComponent } from './modules/historico/historico.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'restaurantes',
    loadChildren: () =>
      import('./modules/restaurantes/restaurantes.module').then(
        (m) => m.RestaurantesModule
      ),
    canActivate: [AuthGuard],
  },
  { path: 'historico', component: HistoricoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService],
})
export class AppRoutingModule {}

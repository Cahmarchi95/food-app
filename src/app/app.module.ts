import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HistoricoComponent } from './modules/historico/historico.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HistoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //PrimeNg
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DynamicDialogModule,
    TableModule,
  ],
  providers: [MessageService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}

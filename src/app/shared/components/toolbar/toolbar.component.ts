import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { FormComponent } from 'src/app/modules/restaurantes/componentes/form/form.component';
import { UserService } from '../../../services/users/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [],
})
export class ToolbarComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private userService: UserService
  ) {}

  handleLogout(): void {
    this.userService.logout();
    void this.router.navigate(['/home']);
  }

  abreModal() {
    const ref = this.dialogService.open(FormComponent, {
      header: 'Cadastrar Restaurante',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      // Adicione mais opções conforme necessário
    });

    // Você pode adicionar lógica adicional aqui para manipular eventos do modal, se necessário
    ref.onClose.subscribe((data) => {
      console.log('Modal fechado com os dados:', data);
    });
  }
}

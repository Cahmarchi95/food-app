import { Component, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) {}

  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid) {
      try {
        const { email, password } = this.loginForm.value;

        if (email != null && password != null) {
          const response = this.userService.login({ email, password });

          if (response) {
            this.loginForm.reset();

            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `Bem-vindo de volta!`,
              life: 2000,
            });

            // Adia o redirecionamento por 2 segundos (tempo de vida do Toast)
            setTimeout(() => {
              this.router.navigate(['/restaurantes']);
            }, 2000);
          } else {
            throw new Error('Falha no login');
          }
        } else {
          throw new Error('Campos de e-mail ou senha inválidos');
        }
      } catch (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: `Erro ao fazer o login!`,
          life: 2000,
        });
        console.error('Erro ao processar o login:', error);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

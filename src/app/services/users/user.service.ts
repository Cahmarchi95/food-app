import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAuthenticated = false;

  private validUser = {
    email: 'usuario@exemplo.com',
    password: 'senha123',
  };

  login(credentials: { email: string; password: string }): boolean {
    if (
      credentials.email === this.validUser.email &&
      credentials.password === this.validUser.password
    ) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}

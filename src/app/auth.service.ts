import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Au démarrage du service, vérifiez le stockage local pour le statut d'authentification
    const savedAuthStatus = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = savedAuthStatus === 'true';
  }

  login(username: string, password: string): boolean {
    if (username && password) {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true'); // Sauvegardez le statut dans le stockage local
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated'); // Supprimez le statut du stockage local
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

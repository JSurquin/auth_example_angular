import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login('username', 'password')) {
      // Remplacez par les valeurs du formulaire
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}

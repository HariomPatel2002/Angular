import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.loginData).subscribe({
      next: (res) => {
        console.log("Login Success:", res);
        localStorage.setItem("token", res.token);

        this.router.navigate(['/dashboard']);   // WORKS NOW ✔✔
      },
      error: (err) => {
        console.log("Error:", err);
      }
    });
  }
}

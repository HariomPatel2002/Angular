import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-singup',
  imports: [CommonModule,FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
  standalone: true
})
export class SingupComponent {
  signupData = {
    username: '',
    email: '',
    password: ''
  }
  router: any;
  constructor(private auth: AuthService){}
  signup(){
    console.log('The name email and password is ',this.signupData.username, this.signupData.email, this.signupData.password);
    this.auth.signup(this.signupData).subscribe({
      next: (res)=>{
        console.log("signUp successful",res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) =>{
        console.log(err);
        alert(err.error.error);
      }
    });
  }
}

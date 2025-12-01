import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singup',
  imports: [CommonModule,FormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
  standalone: true
})
export class SingupComponent {
  name: string = '';
  email: string = '';
  password : string = '';
  signup(){

  }
}

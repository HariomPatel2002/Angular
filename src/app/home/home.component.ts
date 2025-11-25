import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){1

  }
  goToProfile(){
    this.router.navigate(['profile'], {queryParams: {name: 'Hariom Patel'}});
  }
}

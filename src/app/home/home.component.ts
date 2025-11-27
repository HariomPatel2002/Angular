import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users=[
    {id:1,name:'Hariom Patel',age:23,email:'hariom@test.com'},
    {id:2,name:'John Doe',age:25,email:'John@test.com'},
    {id:3,name:'Jane Smith',age:22,email:'jane@test.com'},
    {id:4,name:'Alice Johnson',age:24,email:'Alice@email.com'},
    {id:5,name:'Bob Brown',age:26,email:'bob@emailcom'}
  ]
  constructor(private router: Router){1

  }
  goToProfile(){
    this.router.navigate(['profile'], {queryParams: {name: 'Hariom Patel'}});
  }
}

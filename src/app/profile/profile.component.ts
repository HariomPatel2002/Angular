import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.userName = params['name'];
    console.log("Name:", this.userName);
  });
}
}

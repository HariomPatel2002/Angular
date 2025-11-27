import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  imports:  [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users: undefined|string[];
  handleUsers(users: string[]) {
    console.log('Received users from child component:', users);
    this.users = users;
  }
}

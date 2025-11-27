import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {
  @Output() getUsers = new EventEmitter();
  users = ['Anil Sidhu', 'John Doe', 'Jane Smith', 'Alice Johnson'];
  
   ngOnInit() {
    this.getUsers.emit(this.users);
  }
}

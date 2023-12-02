import { Component } from '@angular/core';


@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css'],
})
export class Task6Component {
  users = [
    { id: 1, name: 'Isabelle', age: 26, gender: 'Female' },
    { id: 2, name: 'Eva', age: 33, gender: 'Female' },
    { id: 3, name: 'Ann', age: 58, gender: 'Male' },
    { id: 4, name: 'Mable', age: 65, gender: 'Female' },
    { id: 5, name: 'Jessie', age: 88, gender: 'Female' },
    { id: 6, name: 'Hattie', age: 44, gender: 'Male' },
  ];

  selectedUser: any = null;

  showUserDetails(user: any): void {
    this.selectedUser = user;
  }
}

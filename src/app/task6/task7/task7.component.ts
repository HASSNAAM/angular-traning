import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css'],
})
export class Task7Component {
  addUser(par:any): void {
    if(par!=''){
      this.users.push({ id:10  , name: par, age: 30, gender: 'Female' });
    }
  }

  deleteUser(user:any): void {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  @Input() users: any[] = [];
  @Output() showDetailsEvent = new EventEmitter<any>();

  showDetails(user: any): void {
    this.showDetailsEvent.emit(user);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
 exampleProperty: any = 'Enter Value';

  logInputValue(value: any) {
    console.log('Input value:', value);
  }
}

import { Component } from '@angular/core';
import { Productdata } from './productdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular';
  productdetailes: Productdata = {
    id: 1,
    name: 'T-shirt',
    price: 100,
    pdetails:"product one",
  };
}

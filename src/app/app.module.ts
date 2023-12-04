import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CoursesComponent } from './courses/courses.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormComponent } from './form/form.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NewTableComponent } from './new-table/new-table.component';
import { Task6Component } from './task6/task6.component';
import { Task7Component } from './task6/task7/task7.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    CoursesComponent,
    FormComponent,
    TableComponent,
    NewTableComponent,
    Task6Component,
    Task7Component,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

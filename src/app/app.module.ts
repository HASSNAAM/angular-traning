import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CoursesComponent } from './courses/courses.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

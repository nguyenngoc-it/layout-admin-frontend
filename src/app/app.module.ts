import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SlidebarComponent } from './components/layouts/slidebar/slidebar.component';
import { MasterComponent } from './components/layouts/master/master.component';
import { FoodterComponent } from './components/layouts/foodter/foodter.component';
import {BooksModule} from "./components/books/books.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidebarComponent,
    MasterComponent,
    FoodterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

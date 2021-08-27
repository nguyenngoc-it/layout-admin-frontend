import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './list-book/list-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DetailComponent
  ],
  exports: [
    ListBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
formAdd: FormGroup |undefined;
  constructor(private bookService: BookService,
              private form: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.formAdd = this.form.group({
      title: [''],
      author: [''],
      description: ['']

    })
  }

  add(){
    let book = this.formAdd?.value;
    console.log(book)
    this.bookService.create(book).subscribe(res => {
      this.route.navigate(['list']).then(res => {
      })
    })
  }
}

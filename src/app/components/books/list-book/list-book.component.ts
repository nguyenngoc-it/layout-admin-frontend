import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {


  coutn:any;
  books:any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.showBook();

  }


  showBook(){
    this.bookService.getAll().subscribe(res =>{
      this.books= res
      this.coutn= this.books.length;
    })
  }

  destroy(id:any){
    if (confirm('ban co muon xoa')){
      this.bookService.delete(id).subscribe(res=>{
        this.showBook();
      })
    }

  }
}

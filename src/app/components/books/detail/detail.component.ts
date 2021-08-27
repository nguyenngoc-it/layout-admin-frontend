import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  formDetail: FormGroup |undefined;
  book:any;
  constructor(private  bookService: BookService,
              private form: FormBuilder,
              private active: ActivatedRoute,
              private route: Router) { }
  // @ts-ignore
  id = +this.active.snapshot.paramMap.get('id');
  ngOnInit(): void {
    console.log(this.id)
    this.bookService.findById(this.id).subscribe(res=>{
      this.book= res;
      this.formDetail= this.form.group({
        title:[this.book.title],
        author:[this.book.author],
        description:[this.book.description]
      })
    })
  }
  submit(){

      this.route.navigate(['/list']);

  }


}

import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
formEdit: FormGroup |undefined;
book:any;
  constructor(private bookService: BookService,
              private form: FormBuilder,
              private active: ActivatedRoute,
              private route: Router) { }

  // @ts-ignore
  id = +this.active.snapshot.paramMap.get('id');
  ngOnInit(): void {
    console.log(this.id)
    this.bookService.findById(this.id).subscribe(res=>{
      this.book= res;
      this.formEdit= this.form.group({
        title:[this.book.title],
        author:[this.book.author],
        description:[this.book.description]
      })
    })
  }

  submit(){
    let data= this.formEdit?.value;
    console.log(data)
    this.bookService.update(data, this.id).subscribe(res=>{
      this.route.navigate(['/list']);
    });
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/books');
  }

  delete(id:any):Observable<any>{
    return this.httpClient.delete('http://localhost:3000/books/'+ id  );
  }

  create(data:any):Observable<any>{
    // @ts-ignore
    return this.httpClient.post('http://localhost:3000/books', data);
  }

  findById(id:any):Observable<any>{
    return this.httpClient.get('http://localhost:3000/books/' + id);
  }
  update(data: any, id: any):Observable<any>{
    return this.httpClient.put('http://localhost:3000/books/'+id, data);
  }
}

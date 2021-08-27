import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";
import {ListBookComponent} from "./components/books/list-book/list-book.component";
import {CreateBookComponent} from "./components/books/create-book/create-book.component";
import {UpdateBookComponent} from "./components/books/update-book/update-book.component";
import {DetailComponent} from "./components/books/detail/detail.component";

const routes: Routes = [
  {

    path: 'list',
    component: ListBookComponent

  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: ':id/update',
    component: UpdateBookComponent
  },
  {
    path: ':id/detail',
    component: DetailComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

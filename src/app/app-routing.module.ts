import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './books-list/add-book/add-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './books-list/edit-book/edit-book.component';
import { AddUserComponent } from './users-list/add-user/add-user.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user/:iduser', component: EditUserComponent},
  {path: 'booklist', component: BooksListComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'edit-book/:idbook', component: EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './users-list/add-user/add-user.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './books-list/add-book/add-book.component';
import { EditBookComponent } from './books-list/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    BooksListComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

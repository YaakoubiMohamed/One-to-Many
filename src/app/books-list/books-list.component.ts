import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Object;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((data) => {
      console.log(data);
     this.books = data;
    })    
  }

  deleteBook(book){
    this.bookService.deleteBook(book._id).subscribe((data) => {
      this.getBooks();
    }
  );
  }

}

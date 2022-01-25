import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  AddBook: FormGroup;
  submitted = false;
  users: any;
  constructor(private router: Router,private userService: UserService,private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
    this.readUser();
    this.AddBook = this.fb.group({
      titre:['',[Validators.required]],
      description:['',[Validators.required]],
      date_publication:['',[Validators.required]],
      userID:['',[Validators.required]],
      
    })
  }
  readUser(){
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
     this.users = data;
    })    
  }

  // Getter to access form control
  get bookForm(){
    return this.AddBook.controls;
  }

  Add(){
    this.submitted = true;
    console.log(this.submitted);
    if (!this.AddBook.valid) {
      console.log('Error');
      return false;
    } else {
      console.log("Book Added successfully");
      console.log(this.AddBook.value);
      this.bookService.createBook(this.AddBook.value).subscribe(
        (res) => {
          console.log(res);
          console.log('Book successfully created!');
          this.router.navigate(['/booklist'])
          //this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}

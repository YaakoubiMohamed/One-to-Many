import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  Update: FormGroup;
  submitted = false;
  users: any;
  id: any;
  constructor(private actRoute: ActivatedRoute,private router: Router,private userService: UserService,private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
    this.readUser();
    this.id = this.actRoute.snapshot.paramMap.get('idbook');
    console.log(this.id);
    this.Update = this.fb.group({
      titre:['',[Validators.required]],
      description:['',[Validators.required]],
      date_publication:['',[Validators.required]],
      userID:['',[Validators.required]],        
    })
    this.bookService.getBook(this.id).subscribe(data => {
      console.log(data);
      this.Update.controls['titre'].setValue(data.titre);
      this.Update.controls['description'].setValue(data.description);
      this.Update.controls['date_publication'].setValue(data.date_publication);
      this.Update.controls['userID'].setValue(data.userID, {onlySelf: true});
    });
  }
  readUser(){
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
     this.users = data;
    })    
  }

  // Getter to access form control
  get bookForm(){
    return this.Update.controls;
  }

  Edit(){
    this.submitted = true;
    console.log(this.submitted);
    if (!this.Update.valid) {
      console.log('Error');
      return false;
    } else {
      console.log("Book Edited successfully");
      console.log(this.Update.value);
      this.bookService.updateBook(this.id,this.Update.value).subscribe(
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

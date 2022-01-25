import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Object;
  User: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.readUser();
  }


  readUser(){
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
     this.users = data;
    })    
  }
  
  deleteUser(user){
    console.log(user);
    this.userService.deleteUser(user._id).subscribe((data) => {
      this.readUser();
    }
  );
  }

}

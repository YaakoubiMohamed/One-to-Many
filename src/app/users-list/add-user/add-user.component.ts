import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  AddUser: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.AddUser = this.fb.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      telephone:['',[Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
    })
  }

  // Getter to access form control
  get userForm(){
    return this.AddUser.controls;
  }

  Add(){
    this.submitted = true;
    console.log(this.submitted);
    if (!this.AddUser.valid) {
      console.log('Error');
      return false;
    } else {
      console.log("User Added successfully");
      console.log(this.AddUser.value);
      this.userService.createUser(this.AddUser.value).subscribe(
        (res) => {
          console.log(res);
          console.log('Employee successfully created!')
          //this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}

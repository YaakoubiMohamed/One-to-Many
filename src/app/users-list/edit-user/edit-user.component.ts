import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  EditUser: FormGroup;
  submitted = false;
  user: any;
  id: string;
  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('iduser');
    console.log(this.id);
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data);
      this.EditUser = this.fb.group({
        nom:[data.nom,[Validators.required]],
        prenom:[data.prenom,[Validators.required]],
        email:[data.email,[Validators.required,Validators.email]],
        telephone:[data.telephone,[Validators.required]],
        password: [data.password, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]],
      })
    });
    
    
  }

  // Getter to access form control
  get userForm(){
    return this.EditUser.controls;
  }

  Edit(){
    this.submitted = true;
    console.log(this.submitted);
    if (!this.EditUser.valid) {
      console.log('Error');
      return false;
    } else {
      console.log("User updated successfully");
      console.log(this.EditUser.value);
      this.userService.updateUser(this.id,this.EditUser.value).subscribe(
        (res) => {
          console.log(res);
          console.log('Employee successfully updated!');
          this.router.navigate(['/']);
          //this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}

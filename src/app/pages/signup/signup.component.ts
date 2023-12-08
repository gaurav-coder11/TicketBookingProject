import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: any = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  };

  constructor(
    private userService: UserserviceService, 
    private _skackbar: MatSnackBar ,
    private router:Router) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this._skackbar.open('username are required !!', '', { duration: 2000 });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this._skackbar.open('password are required !!', '', { duration: 2000 });
      return;
    }
    if (this.user.firstName == '' || this.user.firstName == null) {
      this._skackbar.open('first name are required !!', '', { duration: 2000 });
      return;
    }
    if (this.user.lastName == '' || this.user.lastName == null) {
      this._skackbar.open('last name are required !!', '', { duration: 2000 });
      return;
    }
    if (this.user.email == '' || this.user.email == null) {
      this._skackbar.open('email are required !!', '', { duration: 2000 });
      return;
    }
    
    if (this.user.phoneNo == '' || this.user.phoneNo == null) {
      this._skackbar.open('phone number empty !!', '', { duration: 2000 });
      return;
    }

    // send data to backend
    this.userService.addUser(this.user).subscribe(
      (data) => {
        // success
        console.log(data);
        swal.fire('successfully Register','',);
        this.router.navigate(['/login'])
      },
      (error) => {
        // error
        console.log(error);
        swal.fire('Something went wrong');
      }
    );    
  }
}

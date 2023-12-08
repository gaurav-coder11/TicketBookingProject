import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData={
    username:'',
    password:'',
  }
  constructor(private snack:MatSnackBar){}
  ngOnInit(): void {
   }
   formSubmit(){
    console.log('login form');
    if(
      this.loginData.username.trim() == '' || 
      this.loginData.username == null
      ){
      this.snack.open('username is require','',
      {
        duration:2000,
      });
      return;
    }

    if(
      this.loginData.password.trim() == '' || 
      this.loginData.password == null
      ){
      this.snack.open('password is require','',
      {
        duration:2000,
      });
      return;
    }
   }
}

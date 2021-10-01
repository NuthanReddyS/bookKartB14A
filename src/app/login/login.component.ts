import { Component, OnInit } from '@angular/core';
import {FormControl,FormControlName,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  showPassword = true;
constructor(
){}
loginForm: FormGroup = new FormGroup( 
{
  username: new FormControl ('', Validators.required),
  password: new FormControl ('', Validators.required)
});

  ngOnInit() {
  }

onLogin(){
  
}

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  showPassword = true;
  showConfirmPassword = true;
  registerForm:FormGroup;
  submitted:Boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router,
    ) 
  {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl('',[Validators.required]),

    },{
      validator: this.MustMatch('password','confirmpassword')
    })
  };
  get f(){ return this.registerForm.controls}

  MustMatch(controlName : string, matchingControlName: string ){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null)
      }
    }
  }

  ngOnInit(): void {

  }
  
  onSubmit() {

    console.log(this.registerForm.value);
    this.userservice.register(this.registerForm.value).subscribe((response) => {
            console.log(response);
          });

/*const firstname = this.registerForm.controls.firstname.value;
const lastname = this.registerForm.controls.lastname.value;
const username = this.registerForm.controls.username.value;
const password = this.registerForm.controls.password.value;
const confirmPassword = this.registerForm.controls.confirmPassword.value;
let body = {"firstName" : firstname,
"lastname": lastname,
"username": username,
"password": password,
"confirmPassword": confirmPassword,
};
*/

//this.userservice.onRegister(body).subscribe((x: any) => sessionStorage.setItem('register', x.token));

}
}






import { AuthService } from './auth.service';

import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators } from "@angular/forms";
import { UserNameValidator } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers:[AuthService]
})
export class SignupFormComponent {

  constructor(private _authService : AuthService){}

  form = new FormGroup({
      account : new FormGroup({
        username : new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          UserNameValidator.cannotContainSpace
        ],UserNameValidator.shouldBeUnique),
        password : new FormControl('',Validators.required)
      })
  });

  // its working lika a c# property
  get username(){
    return this.form.get('account.username');
  }

  login(){
    let isValid = this._authService.login(this.form.value);
    if(!isValid)
      this.form.setErrors({invalidLogin: true});
    else
      console.log('Login success.');
  }
}

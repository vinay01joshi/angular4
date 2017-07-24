import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators } from "@angular/forms";
import { UserNameValidator } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
      username : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UserNameValidator.cannotContainSpace
      ],UserNameValidator.shouldBeUnique),
      password : new FormControl('',Validators.required)
  });

  // its working lika a c# property
  get username(){
    return this.form.get('username');
  }
}

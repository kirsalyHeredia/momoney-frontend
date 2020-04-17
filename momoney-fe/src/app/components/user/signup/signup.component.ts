import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validation/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  get firstName(){
    return this.signupForm.get('firstName');
  }

  get lastName(){
    return this.signupForm.get('lastName');
  }

  get ssn(){
    return this.signupForm.get('ssn');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get phoneNum(){
    return this.signupForm.get('phoneNum');
  }

  get username(){
    return this.signupForm.get('username');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get securityQuestion(){
    return this.signupForm.get('securityQuestion');
  }

  get securityQuestionAnswer(){
    return this.signupForm.get('securityQuestionAnswer');
  }

  signupForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.maxLength(40)]],
    lastName: ['',[Validators.required, Validators.maxLength(40)]],
    ssn: ['',[Validators.required, Validators.pattern('^[0-9]{9}$')]],
    dob: ['',Validators.required],
    email: ['',[Validators.required, Validators.email]],
    phoneNum: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
    username: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    password: ['',[Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$')]],
    confirmPassword: ['', Validators.required],
    streetAdress: ['',Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['',Validators.required],
    securityQuestion: ['', Validators.required],
    securityQuestionAnswer: ['', Validators.required]
  }, { validator: PasswordValidator});

  ngOnInit(): void {
  }

}

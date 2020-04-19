import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-uname',
  templateUrl: './forgot-uname.component.html',
  styleUrls: ['./forgot-uname.component.css']
})
export class ForgotUnameComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  forgotUsernameForm = this.fb.group({});

  ngOnInit(): void {
    
  }

}

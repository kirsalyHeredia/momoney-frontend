import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  forgotPasswordForm = this.fb.group({});

  ngOnInit(): void {
  }

}

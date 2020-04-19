import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router) { }

  loginForm = this.fb.group({});

  ngOnInit(): void {

  }

  changeView(view: string){
    this.router.navigate([view]);
  }
  
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  updateForm = this.fb.group({});

  ngOnInit(): void {
  }

  changeView(view: string){
    this.router.navigate([view]);
  }
}

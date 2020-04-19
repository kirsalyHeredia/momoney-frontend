import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-open-acct',
  templateUrl: './open-acct.component.html',
  styleUrls: ['./open-acct.component.css']
})
export class OpenAcctComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  openAcctForm = this.fb.group({});

  ngOnInit(): void {
  }

}

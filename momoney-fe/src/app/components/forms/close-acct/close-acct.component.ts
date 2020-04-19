import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-close-acct',
  templateUrl: './close-acct.component.html',
  styleUrls: ['./close-acct.component.css']
})
export class CloseAcctComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  closeAcctForm = this.fb.group({});

  ngOnInit(): void {
  }

}

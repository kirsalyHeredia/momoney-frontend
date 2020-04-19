import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autosave',
  templateUrl: './autosave.component.html',
  styleUrls: ['./autosave.component.css']
})
export class AutosaveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  autosaveForm = this.fb.group({});

  ngOnInit(): void {
  }

}

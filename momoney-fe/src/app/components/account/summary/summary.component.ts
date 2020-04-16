import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../../../classes/account/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor( private acctService: AccountService, private router: Router) { }

  accounts$: Observable<Account[]>;

  ngOnInit(): void {
    //need to grab the userId from the session
    this.accounts$ = this.acctService.getAllAccts(1);
    console.log(this.accounts$);
  }

  viewDetails(view: string){
    this.router.navigate([view]);
  }
  
}

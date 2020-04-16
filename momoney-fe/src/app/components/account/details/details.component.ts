import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../../classes/account/account';
import { Transaction } from '../../../classes/account/account';
import { AccountService } from 'src/app/services/account/account.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private acctService: AccountService, private router: Router) { }
  account$: any;
  transactions$: Observable<Transaction[]>;
  acctId:number

  ngOnInit(): void {
    //pull the acct id from the summary page
    //this.acctId = this.router.snapshot.params['id']
    this.account$ = this.acctService.getAcctDetails(1);
    this.transactions$ = this.acctService.getAcctTransactions(1);
  }


  viewAccts(view: string){
    this.router.navigate([view]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor( private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/momoney/accounts';

  //grabs the summary information of all accts associated
  //to a single user
  getAllAccts(userId: number): Observable <any> {
    return this.http.get(`${this.baseUrl}/all/${userId}`);
  }

  //grabs all the details associated with a single
  //account
  getAcctDetails(accountId: number): Observable <any> {
    return this.http.get(`${this.baseUrl}/acct-details/${accountId}`);
  }

  //grabs all the transactions associated with a single
  //account
  getAcctTransactions(accountId: number): Observable <any> {
    return this.http.get(`${this.baseUrl}/acct-transactions/${accountId}`);
  }

}

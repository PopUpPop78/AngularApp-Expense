import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Expense } from './expense.model'
import { ConfigService } from '../Config/config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  public expenses: Expense[] = [];
  public presentExpense: Expense = new Expense();
  public submitted: boolean;

  constructor(private httpClient: HttpClient, private confService: ConfigService) {
   }

  postExpense(expense: Expense){

    var body = JSON.stringify(expense);
    var headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.httpClient.post<Expense>(this.confService.config.serverUrl + '/api/expenses', body, httpOptions);
  }

  deleteExpense(expense: Expense){
    return this.httpClient.delete<Expense>(this.confService.config.serverUrl + '/api/expenses/' + expense.id);
  }



}

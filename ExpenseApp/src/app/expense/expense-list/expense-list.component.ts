import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../shared/Expense/expense.service';
import { Expense } from '../shared/Expense/expense.model';
import { ErrorService } from '../shared/error.service';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(public expService: ExpenseService, public errService: ErrorService) { }

  ngOnInit() {
  }

  updateExpense(expense: Expense){
    this.expService.presentExpense = expense;
  }

  deleteExpense(expense: Expense){
    this.expService.deleteExpense(expense).subscribe(data=>{
      var index = this.expService.expenses.indexOf(expense);
      if(index != -1){
        this.expService.expenses.splice(index, 1);
      }
    }, error=>{
      this.errService.handleError(error);
    })
  }


}

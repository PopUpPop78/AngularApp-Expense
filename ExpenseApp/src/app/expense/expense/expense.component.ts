import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ExpenseService } from '../shared/Expense/expense.service';
import { Expense } from '../shared/Expense/expense.model';
import { CurrencyService } from '../shared/Currency/currency.service';
import { Currency } from '../shared/Currency/currency.model';
import { ErrorService } from '../shared/error.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  public currencies: Currency[];

  constructor(public currService: CurrencyService, public expService: ExpenseService, public errService: ErrorService) { }

  ngOnInit() {
    this.resetForm();
  }

  getCurrencies(){
    this.currService.loadCurrencies().subscribe(data=>{
      this.currencies = Object.values(data);
    }, error => {
      this.errService.handleError(error);
    });
  }

  onSubmit(form: NgForm){
    this.expService.submitted = true;
    this.expService.postExpense(form.value).subscribe(data=>{
      
      var exp = this.expService.expenses.find(x=> x.id == data.id);

      if(exp === undefined){
        this.expService.expenses.push(data);
      }else{
        var index = this.expService.expenses.indexOf(exp);
        this.expService.expenses.splice(index, 1);
        this.expService.expenses.push(data);
      }

      this.resetForm(form);
      this.expService.submitted = false;

    }, error =>{

      this.errService.handleError(error);
      this.expService.submitted = false;
    });
  }

  resetForm(form?: NgForm){

    if(form != null){
      form.reset();
    }

    this.getCurrencies();
    this.expService.presentExpense = new Expense();
  }

}

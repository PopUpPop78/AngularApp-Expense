import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense/expense.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

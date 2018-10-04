import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Currency } from './currency.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  loadCurrencies(){
    return this.httpClient.get<Currency[]>('./assets/currencies.json');
  }

}

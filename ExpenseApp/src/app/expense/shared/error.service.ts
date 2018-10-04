import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handleError(error: HttpErrorResponse){
    if(error.error instanceof(ErrorEvent)){
      console.error('An error occurred: ', error.error.message);
    }
    else{
      console.error(JSON.stringify(error));
      alert(JSON.stringify(error.error));
    }
  }

}

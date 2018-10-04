import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorService } from '../error.service';
import { Config } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config

  constructor(private httpClient: HttpClient, private errService: ErrorService) {
    this.loadConfig();
   }


  loadConfig(){
    this.httpClient.get<Config>('./assets/config.json').subscribe(data=>{
      this.config = data;
    }, error=>{
      this.errService.handleError(error);
    })
  }

}

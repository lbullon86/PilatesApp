import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Balance } from './balance-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  urlBalance:string;
  constructor(private http:HttpClient) {
    this.urlBalance = environment.baseUrl +'/balance';
   }

   getBalanceGlobal(){
     return this.http.get(`${this.urlBalance}`) as Observable <Balance>;
   }

   getBalanceMonths(year:number){
     return this.http.get(`${this.urlBalance}/months/${year}`) as Observable <Balance[]>
   }
}

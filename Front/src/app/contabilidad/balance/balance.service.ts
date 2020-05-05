import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Balance } from './balance-model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  urlBalance:string;
  constructor(private http:HttpClient) {
    this.urlBalance = "http://localhost:3000/balance"
   }

   getBalanceGlobal(){
     return this.http.get(`${this.urlBalance}`) as Observable <Balance>;
   }

   getBalanceMonths(year:number){
     return this.http.get(`${this.urlBalance}/months/${year}`) as Observable <Balance[]>
   }
}

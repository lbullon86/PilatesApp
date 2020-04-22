import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  urlExpenses:string= "http://localhost:3000/expenses"
  constructor(
    private http:HttpClient
  ) { 

  }

  getAll():Observable<Expense[]>{
    return this.http.get(this.urlExpenses) as Observable<Expense[]>;
  }
  save(expense:Expense) :Observable<Expense>{
    return this.http.post<Expense>(this.urlExpenses,expense);
  }
  getSumAll(){
    return this.http.get(`${this.urlExpenses}/sumAll`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from './expense';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  urlExpenses:string= environment.baseUrl+'/expenses';
  constructor(
    private http:HttpClient
  ) {   }

  getAll():Observable<Expense[]>{
    return this.http.get(this.urlExpenses) as Observable<Expense[]>;
  }
  save(expense:Expense) :Observable<Expense>{
    return this.http.post<Expense>(this.urlExpenses,expense);
  }
  getSumAll(){
    return this.http.get(`${this.urlExpenses}/sumAll`);
  }

  getOneMonthByConcept(year:number,month:number){
    return this.http.get(`${this.urlExpenses}/oneMonth/${year}/${month}`) as Observable<Expense[]>;
  }

  getYear(year:number){
    return this.http.get(`${this.urlExpenses}/months/${year}`) as Observable <Expense[]>;
  }

  getYearByConcept(year:number){
    return this.http.get(`${this.urlExpenses}/yearConcept/${year}`) as Observable <Expense[]>;
  }

  getQuarter(year:number, quarter:number){
    return this.http.get(`${this.urlExpenses}/${quarter}/OnequarterByConcept/${year}`) as Observable <Expense[]>
  }

  getQuarterByMonths(quarter:number, year:number){
    return this.http.get(`${this.urlExpenses}/quartersByMonth/${quarter}/${year}`) as Observable <Expense[]>



  }






}

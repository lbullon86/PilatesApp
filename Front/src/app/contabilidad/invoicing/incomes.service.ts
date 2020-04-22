import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoicing } from './invoicing-model';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  urlIncomes:string;
  constructor(private http:HttpClient) {
    this.urlIncomes = "http://localhost:3000/invoices"
   }

   getInvoicing():Observable<Invoicing>{
     
     return this.http.get(`${this.urlIncomes}/invoicing`) as Observable<Invoicing>;
   }

   getInvoicingOneDay(date:Date):Observable<Invoicing>{
     return this.http.get(`${this.urlIncomes}/invoicingDay/${date}`) as Observable<Invoicing>;
   }
   
   getInvoicingQuarter():Observable<Invoicing[]>{
     return this.http.get(`${this.urlIncomes}/invoicingDay`) as Observable <Invoicing[]>
   }
}

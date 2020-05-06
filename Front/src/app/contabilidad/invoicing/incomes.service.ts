import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoicing } from './invoicing-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  urlIncomes:string;
  constructor(private http:HttpClient) {
    this.urlIncomes = environment.baseUrl+"/invoices"
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

   getInvoicingOnePeriod(date1:Date,date2:Date):Observable<Invoicing>{
    const params = new HttpParams().append('from', date1.toISOString()).append('to', date2.toISOString());
     return this.http.get(`${this.urlIncomes}/invoicingPeriod`,{params}) as Observable <Invoicing>
   }
}

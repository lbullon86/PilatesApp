import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Invoicing } from '../invoicing/invoicing-model';
import { InvoicingClass } from '../invoicing/invoicingClass-model';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResumeIncomesService {
  urlInvoicing:string
  constructor(private http:HttpClient) {

    this.urlInvoicing= "http://localhost:3000/invoices";
   }

   getQuarterInvoicing(){
     return this.http.get(`${this.urlInvoicing}/invoicingQuarter`) as Observable<Invoicing[]> ;
   }
   
   getInvoicingClass(year:number){
     return this.http.get(`${this.urlInvoicing}/invoicingClass/${year}`) as Observable <InvoicingClass>
   }

   getInvoicingPayment(year:number){
     return this.http.get(`${this.urlInvoicing}/invoicingYearByMethodPayment/${year}`) as Observable <Invoicing>
   }

   getInvoicingClassQuarter(year:number,month1:number, month2:number){
    const params = new HttpParams().append('from', month1.toString()).append('to', month2.toString());

     return this.http.get(`${this.urlInvoicing}/quarterClass/${year}`, {params}) as Observable <InvoicingClass>
   }

   getInvoicingQuarterPayment(year:number,month1:number, month2:number){
    const params = new HttpParams().append('from', month1.toString()).append('to', month2.toString());
    return this.http.get(`${this.urlInvoicing}/oneQuarterAllMethodPayment/${year}`, {params}) as Observable <Invoicing>

   }

   getInvoicingOneMonthByPayment(year:number,month:number){
    return this.http.get(`${this.urlInvoicing}/oneMonthAllMethods/${year}/${month}`) as Observable <Invoicing>
  }

   getInvoicingOneMonthByClass(year:number,month:number){
    return this.http.get(`${this.urlInvoicing}/monthsClass/${year}/${month}`) as Observable <InvoicingClass>
  }


  }

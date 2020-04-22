import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoicing } from '../invoicing/invoicing-model';
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
}

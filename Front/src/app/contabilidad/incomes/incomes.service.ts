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
    this.urlIncomes = "http://localhost:3000/invoices/facturacion"
   }

   getFacturacion():Observable<Invoicing>{
     
     return this.http.get(this.urlIncomes) as Observable<Invoicing>;
   }
}

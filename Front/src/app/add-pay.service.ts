import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from './detail-client/add-pay/price-model';
import { Pay } from './detail-client/add-pay/pay-model';
import { Pass } from './detail-client/add-attendance/pass.model';
import { Client } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class AddPayService {

  public urlPrice:string;
  public urlClients:string;
  public url:string;

  constructor(private http:HttpClient){ 
    this.urlPrice ="http://localhost:3000/prices";
    this.urlClients ="http://localhost:3000/clientes"

  }

  getAllPrices():Observable<Price[]>{
    return this.http.get(this.urlPrice) as Observable<Price[]>
  }

  savePay(pay:Pay):Observable<Pay>{       
    return this.http.post<Pay>(`${this.urlClients}/${pay.client.idClient}/invoices`, pay);
  }

  savePass(pass:Pass):Observable<Pass>{
    return this.http.post<Pass>(`${this.urlClients}/${pass.invoice.client.idClient}/invoices/${pass.invoice.idInvoice}/pass`,pass);

  }

  getLastInvoice(id:number):Observable<Pay>{
    return this.http.get(`${this.urlClients}/${id}/lastInvoice`) as Observable<Pay>;
    
  }
  


}

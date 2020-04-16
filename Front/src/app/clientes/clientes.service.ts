import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './cliente';
import { Pay } from '../detail-client/add-pay/pay-model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public urlClient:string;

  constructor(private http:HttpClient){ 
    this.urlClient ="http://localhost:3000/clientes"

  }
  findAll():Observable<Object[]>{
    return this.http.get(this.urlClient) as Observable <Client[]>

  }

  save(client:Client):Observable<Object>{
    return this.http.post<Client>(this.urlClient,client); 
  }

  findOne(id:number):Observable<Client>{
    return this.http.get(`${this.urlClient}/${id}`) as Observable <Client>;
  } 

  getInvoicesOneClient(id:number):Observable<Pay[]>{
    return this.http.get(`${this.urlClient}/${id}/invoices`) as Observable <Pay[]>;
  } 


  updateClient(client:Client):Observable<Client>{
    
    return this.http.put(`${this.urlClient}/${client.idClient}`, client) as Observable <Client>;

  }

}


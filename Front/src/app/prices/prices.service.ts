import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Prices } from './price-model';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  public urlPrice:string;

  constructor(private http:HttpClient){ 
    this.urlPrice = environment.baseUrl+  '/prices';

  }
  findAll():Observable<Object[]>{
    return this.http.get(this.urlPrice) as Observable <Prices[]>

  }


  save(price:Prices):Observable<Object>{
    return this.http.post<Prices>(this.urlPrice,price); 
  }

}

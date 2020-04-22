import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  getTaxes(invoicing:number){
    let iva = Math.round(invoicing - (invoicing/1.21))/100*100;
    let irpf =  Math.round((invoicing /1.21)*0.20)/100*100
    return iva+irpf
  }
}

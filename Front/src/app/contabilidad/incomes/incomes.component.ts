import { Component, OnInit } from '@angular/core';
import { IncomesService } from './incomes.service';
import { Observable } from 'rxjs';
import { Invoicing } from './invoicing-model';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})

export class IncomesComponent implements OnInit {
  invoicing:Invoicing
  constructor(private serviceIncomes:IncomesService) {
    this.invoicing = new Invoicing()
    
   }

  ngOnInit() {

     return this.serviceIncomes.getFacturacion().subscribe(invoicing=> this.invoicing = invoicing)
  }

  getIva(){
    return Math.round(this.invoicing.sum - (this.invoicing.sum/1.21))/100*100;
  }

  getIRPF(){
    return Math.round((this.invoicing.sum /1.21)*0.20)/100*100
  }

  getNetIncome(){
    return this.invoicing.sum - this.getIva() - this.getIRPF();
  }
}

import { Component, OnInit } from '@angular/core';
import { IncomesService } from './incomes.service';
import { Invoicing } from './invoicing-model';
import { Observable } from 'rxjs';
import { FunctionsService } from 'src/app/functions.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})

export class IncomesComponent implements OnInit {
  
  invoicing:Invoicing;
  dateInvoicing:Date;
  account:Invoicing;  


  constructor(private serviceIncomes:IncomesService, private serviceFunctions:FunctionsService) {
    this.invoicing = new Invoicing(),
    this.dateInvoicing = new Date();
    this.account = new Invoicing();
    this.serviceIncomes.getInvoicing().subscribe(invoicing=> this.account = invoicing);
    this.serviceIncomes.getInvoicingOneDay(this.dateInvoicing).subscribe(invoicing=> this.invoicing = invoicing)
    
   }

  ngOnInit() {

    
     
  }
  
  getInvoicingToday(){
    
    this.serviceIncomes.getInvoicingOneDay(this.dateInvoicing).subscribe(invoicing=> this.invoicing = invoicing)
    


  }





  getInvoicingOneDay(){
    return  this.serviceIncomes.getInvoicingOneDay(this.dateInvoicing).subscribe(invoicing=> this.invoicing = invoicing);
  }
}

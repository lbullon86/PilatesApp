import { Component, OnInit } from "@angular/core";
import { IncomesService } from "./incomes.service";
import { Invoicing } from "./invoicing-model";
import { Observable, forkJoin } from "rxjs";
import { FunctionsService } from "src/app/functions.service";

@Component({
  selector: "app-incomes",
  templateUrl: "./incomes.component.html",
  styleUrls: ["./incomes.component.css"]
})
export class IncomesComponent implements OnInit {
  invoicing: Invoicing = new Invoicing();
  dateInvoicing: Date;
  dateFirst: Date;
  dateSecond: Date;
  account: Invoicing;
  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };
  cardColor: string = "#232837";
  dataInvoicing = [];
  dataTotal = [];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  inputController:string;
  checked:boolean;
  constructor(
    private serviceIncomes: IncomesService,
  ) {
    (this.invoicing = new Invoicing()), (this.dateInvoicing = new Date());
    this.dateFirst = new Date();
    this.dateSecond = new Date();
    this.account = new Invoicing();
    this.dateInvoicing = new Date();
    this.checked = false;
    
  }

  ngOnInit() {
    this.dateInvoicing.setHours(0,0,0,0)

    forkJoin({
      account: this.serviceIncomes.getInvoicing(),
      invoicing: this.serviceIncomes.getInvoicingOneDay(this.dateInvoicing)
    }).subscribe(result=> this.handleInvoiceResult(result))
  }

  private handleInvoiceResult({account, invoicing}){
    this.account=account;  
    this.invoicing = invoicing;
    this.getData()


  }
  getData() {
    this.dataTotal = [
      {
        name: "Caja Empresa",
        value: this.account.sum
      },
      {
        name: "Caja Impuestos",
        value: this.account.sumTax
      }
    ];
    this.dataInvoicing = [
      {
        name: "Ingresos",
        value: this.invoicing.sum + "€"
      },
      {
        name: "Impuestos",
        value: this.invoicing.sumTax + "€"
      },
      {
        name: "Efectivo",
        value: this.invoicing.sumCash + "€"
      },
      {
        name: "Banco",
        value: this.invoicing.sum - this.invoicing.sumCash + "€"
      }
    ];
  }

  getInvoicingToday() {
    this.serviceIncomes
      .getInvoicingOneDay(this.dateInvoicing)
      .subscribe(invoicing => {
        (this.invoicing = invoicing), this.getData();
      });
      alert(this.dateInvoicing)
  }

  getInvoicingOnePeriod() {
    this.serviceIncomes
      .getInvoicingOnePeriod(this.dateFirst, this.dateSecond)
      .subscribe(invoicing => {
        (this.invoicing = invoicing), this.getData();
      });
  }

  

  
}

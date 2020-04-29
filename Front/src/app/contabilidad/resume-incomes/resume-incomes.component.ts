import { Component, OnInit } from "@angular/core";
import { ResumeIncomesService } from "./resume-incomes.service";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { map } from "rxjs/operators";
import { InvoicingClass } from "../invoicing/invoicingClass-model";
import { isNull } from 'util';

@Component({
  selector: "app-resume-incomes",
  templateUrl: "./resume-incomes.component.html",
  styleUrls: ["./resume-incomes.component.css"]
})
export class ResumeIncomesComponent implements OnInit {
  displayedColumns: string[] = ["sum"];
  invoicingClass: InvoicingClass;
  dataClass = [];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor(private serviceInvoicing: ResumeIncomesService) {
    this.invoicingClass = new InvoicingClass();
  }

  ngOnInit() {
    this.serviceInvoicing
      .getInvoicingClass(2020)
      .subscribe(invoicing => (this.invoicingClass = invoicing, this.getData()));
  }

  getData() {
    this.dataClass = [
      {
        name: "Reformer",
        value: this.invoicingClass.reformer1 + this.invoicingClass.reformer2
      },
      {
        name: "Mat",
        value: this.invoicingClass.mat1 + this.invoicingClass.mat2
      },
      {
        name: "Bonos",
        value: this.invoicingClass.B8 + this.invoicingClass.B16
      },
      {
        name: "Total Barre",
        value: isNull(this.invoicingClass.totalBarre2)
      }
    ]
  }

}

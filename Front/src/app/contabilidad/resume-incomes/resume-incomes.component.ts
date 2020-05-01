import { Component, OnInit } from "@angular/core";
import { ResumeIncomesService } from "./resume-incomes.service";
import { InvoicingClass } from "../invoicing/invoicingClass-model";

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
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  date: Date;
  year: number;
  months = [];
  quarter: number;
  monthSelected: number;
  parameter: boolean;

  constructor(private serviceInvoicing: ResumeIncomesService) {
    this.invoicingClass = new InvoicingClass();
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.parameter = true;
  }

  ngOnInit() {
    this.getIncomingYearByClass();
  }

  getMonthsOfQuarter(quarter: number) {
    var months = [];

    switch (quarter) {
      case 1:
        return (months = [1, 3]);
        break;
      case 2:
        return (months = [4, 6]);
        break;
      case 3:
        return (months = [7, 9]);
        break;
      case 4:
        return (months = [10, 12]);
        break;

      default:
        break;
    }
  }

  getIncomingYearByClass() {
    this.serviceInvoicing
      .getInvoicingClass(this.year)
      .subscribe(
        invoicing => ((this.invoicingClass = invoicing), this.getDataByClass())
      );
  }

  getIncomingQuarterByClass() {
    this.serviceInvoicing
      .getInvoicingClassQuarter(this.year, this.getMonthsOfQuarter(this.quarter)[0],this.getMonthsOfQuarter(this.quarter)[1])
      .subscribe(
        invoicing => (
          (this.invoicingClass = invoicing[this.quarter - 1]),
          this.getDataByClass()
        )
      );
  }

  getInvoicingMonthsByClass() {
    this.serviceInvoicing
      .getInvoicingOneMonthByClass(this.year, this.monthSelected)
      .subscribe(
        invoicing => ((this.invoicingClass = invoicing), this.getDataByClass())
      );
  }

  getDataByClass() {
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
        value: this.invoicingClass.totalBarre1 + this.invoicingClass.totalBarre2
      }
    ];
  }
}

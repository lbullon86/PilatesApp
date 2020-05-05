import { Component, OnInit, ViewChild } from "@angular/core";
import { Expense } from "./expense";
import { ExpensesService } from "./expenses.service";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { map } from "rxjs/operators";
import { InsertExpenseComponent } from "./insert-expense/insert-expense.component";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html",
  styleUrls: ["./expenses.component.css"]
})
export class ExpensesComponent implements OnInit {
  date: Date;
  expenseList: Expense[];
  expensesObservable: Observable<MatTableDataSource<Expense>>;
  expenses: MatTableDataSource<Expense>;
  displayedColumns: string[] = ["concept", "quantity", "date"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  numero: number = null;
  controller: boolean = true;
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  monthSelected: number;
  data = []
  yearSelected:number;
  view: any[] = [700, 400];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Country";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Population";
  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };
  constructor(
    private expenseService: ExpensesService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ) {
    this.expenseList = [];
    this.date = new Date();
    this.monthSelected = this.date.getMonth() + 1;
    this.yearSelected = this.date.getFullYear()
  }

  ngOnInit() {
    this.expensesObservable = this.refreshExpenses();
  }

   getMonth() {
     this.expenseService
      .getOneMonthByConcept(this.date.getFullYear(), this.monthSelected)
      .subscribe(expense => (this.data = expense.map(e => ({name: e.concept, value: e.quantity}))));
      this.changeController();
 
  }

  getYear(){
      this.expenseService.getYear(this.yearSelected)
      .subscribe(expense => (this.data = expense.map(e => ({name: e.month, value: e.sum}))));
      this.changeController();

    }
  changeController() {
    this.controller = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.expenses.filter = filterValue.trim().toLowerCase();
  }

  refreshExpenses() {
    return this.expenseService
      .getAll()
      .pipe(map(data => (this.expenses = new MatTableDataSource(data))));
  }

  addPay(): void {
    const dialogRef = this.dialog.open(InsertExpenseComponent, {
      width: "450px",
      height: "450px"
    });
    dialogRef
      .afterClosed()
      .subscribe(
        clientes => (this.expensesObservable = this.refreshExpenses())
      );
  }

  parseDate(date: Date) {
    return this.datePipe.transform(date, "dd-mm-yyyy");
  }
}

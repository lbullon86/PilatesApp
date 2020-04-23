import { Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from './expense';
import { ExpensesService } from './expenses.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTab } from '@angular/material/tabs';
import { map } from 'rxjs/operators';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  date:Date;
  expenseTotal:Object = new Object();
  expensesObservable:Observable<MatTableDataSource<any>>;
  expenses:MatTableDataSource<any>;  
  displayedColumns: string[] = ['concept', 'quantity','date' ];  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private expenseService:ExpensesService, public dialog:MatDialog) {
  
    this.expenseTotal = this.expenseService.getSumAll()
    
   }

  ngOnInit() {
    this.expensesObservable = this.refreshExpenses()

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.expenses.filter = filterValue.trim().toLowerCase();
      
  }

  refreshExpenses(){
    return  this.expenseService.getAll().pipe(map(data =>this.expenses = new MatTableDataSource(data)))  

  }

  addPay():void{
      const dialogRef = this.dialog.open(InsertExpenseComponent, {
        width: '450px',
        height:'450px'    
             
      })
      dialogRef.afterClosed()
      .subscribe(clientes => this.expensesObservable = this.refreshExpenses())
    }
    
      
  
    
  
}

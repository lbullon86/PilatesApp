import { Component, OnInit, Inject } from '@angular/core';
import { Expense } from '../expense';
import { ExpensesService } from '../expenses.service';
import { DialogData } from 'src/app/clientes/insert-client/insert-client.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExpensesComponent } from '../expenses.component';

@Component({
  selector: 'app-insert-expense',
  templateUrl: './insert-expense.component.html',
  styleUrls: ['./insert-expense.component.css']
})
export class InsertExpenseComponent implements OnInit {
  expense:Expense = new Expense();
  constructor(
    private serviceExpense:ExpensesService,
    public dialogRef: MatDialogRef<ExpensesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  saveExpense(){
    return this.serviceExpense.save(this.expense).subscribe(expenses => this.dialogRef.close(this.dialogRef));
  }

}

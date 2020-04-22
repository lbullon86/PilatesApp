import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material';
import { ExpensesComponent } from './expenses.component';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';



@NgModule({
  declarations: [ExpensesComponent,InsertExpenseComponent],
  imports: [
    CommonModule,MatPaginatorModule
  ],
  entryComponents:[InsertExpenseComponent]
})
export class ExpensesModule { }

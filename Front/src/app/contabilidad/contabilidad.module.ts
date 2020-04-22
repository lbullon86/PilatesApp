import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad.component';
import { IncomesComponent } from './invoicing/incomes.component';
import {  MatTableModule, MatButtonModule,  MatFormFieldModule, MatDatepickerModule,  MatGridListModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { BalanceComponent } from './balance/balance.component';
import { ResumeIncomesComponent } from './resume-incomes/resume-incomes.component';
import { InsertClientComponent } from '../clientes/insert-client/insert-client.component';
import { InsertExpenseComponent } from './expenses/insert-expense/insert-expense.component';



@NgModule({
  declarations: [ContabilidadComponent,IncomesComponent, ExpensesComponent, BalanceComponent, ResumeIncomesComponent,InsertExpenseComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatFormFieldModule, MatDatepickerModule, FormsModule, MatGridListModule,MatInputModule, MatPaginatorModule
  ],
  entryComponents:[IncomesComponent, ExpensesComponent,InsertExpenseComponent]
})
export class ContabilidadModule { }

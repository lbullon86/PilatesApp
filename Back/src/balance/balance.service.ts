import { Injectable } from '@nestjs/common';
import { Balance } from './balance';
import { ExpensesService } from 'src/expenses/expenses.service';
import { InvoiceService } from 'src/invoice/invoice.service';
import { Invoicing } from 'src/invoice/invoicing-model';
import { ResumeExpense } from 'src/expenses/resumeExpense';

@Injectable()
export class BalanceService {
  constructor(
    private readonly serviceInvoice: InvoiceService,
    private readonly serviceExpense: ExpensesService,
  ) {}

  async getBalanceGlobal() {
    const balance: Balance = new Balance();
    const sum = await this.serviceInvoice.getInvoicing();
    const sumIva = sum.sum - sum.sum / 1.21;
    const sumIrpf = (sum.sum / 1.21) * 0.2;
    const sumExpense = await this.serviceExpense.getSumAllExpenses();

    balance.sum = Math.round(
      sum.sum - sumExpense.sum - (sumIva - sumExpense.sumIva) - sumIrpf,
    );

    return balance;
  }

  getBalance(invoicing: Invoicing, expenses: ResumeExpense) {
    const balance: Balance = new Balance();
    const sumIva = invoicing.sum - invoicing.sum / 1.21;
    const sumIrpf = (invoicing.sum - sumIva) * 0.2;
    balance.sum = Math.round(
      invoicing.sum - expenses.sum - (sumIva - expenses.sumIva) - sumIrpf,
    );
    return balance;
  }

  async getBalanceYear(year: number) {
    return this.getBalance(
      await this.serviceInvoice.getInvoicingYear(year),
      await this.serviceExpense.getSumAllExpensesYear(year),
    );
  }

  async getBalanceOneMonth(year: number, month: number) {
     return this.getBalance(
      await this.serviceInvoice.getInvoicingOneMonth(year, month),
      await this.serviceExpense.getSumAllExpensesOneMonth(year,month),
    );
  }

  async getBalanceMonthsOneYear(year: number) {
    var balanceYear:Balance[]=[];
    const invoicing = await this.serviceInvoice.getInvoicingOneYearAllMonths(year);
    const expenses = await this.serviceExpense.getSumAllMonthsOneYear(year)
    for (let index = 0; index < 12; index++) {
      balanceYear.push(this.getBalance(invoicing[index],expenses[index])) 
      balanceYear[index].month = index+1;
      
    }

    return balanceYear


  }
}

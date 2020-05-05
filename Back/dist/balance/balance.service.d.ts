import { Balance } from './balance';
import { ExpensesService } from 'src/expenses/expenses.service';
import { InvoiceService } from 'src/invoice/invoice.service';
import { Invoicing } from 'src/invoice/invoicing-model';
import { ResumeExpense } from 'src/expenses/resumeExpense';
export declare class BalanceService {
    private readonly serviceInvoice;
    private readonly serviceExpense;
    constructor(serviceInvoice: InvoiceService, serviceExpense: ExpensesService);
    getBalanceGlobal(): Promise<Balance>;
    getBalance(invoicing: Invoicing, expenses: ResumeExpense): Balance;
    getBalanceYear(year: number): Promise<Balance>;
    getBalanceOneMonth(year: number, month: number): Promise<Balance>;
    getBalanceMonthsOneYear(year: number): Promise<Balance[]>;
}

import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Invoicing } from './invoicing-model';
import { Balance } from './balance';
import { ExpensesService } from 'src/expenses/expenses.service';
import { InvoicingClass } from './invoicingClass-model';
export declare class InvoiceService {
    private readonly repositoryInvoice;
    private readonly serviceExpense;
    constructor(repositoryInvoice: Repository<Invoice>, serviceExpense: ExpensesService);
    getAll(): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
    getInvoicing(): Promise<Invoicing>;
    getInvoicingOneDay(date: Date): Promise<Invoicing>;
    getPasses(): Promise<Invoice[]>;
    getInvoicingOnePeriod(dateInvoice1: Date, dateInvoice2: Date): Promise<Invoicing>;
    getInvoicingQuarter(): Promise<Invoicing[]>;
    getBalance(): Promise<Balance>;
    getInvoicingOneYearByClass(year: number): Promise<InvoicingClass>;
}

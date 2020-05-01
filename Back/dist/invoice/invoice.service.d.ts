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
    getInvoicingMonthByOneClass(year: number, month: number, typeClass: string): Promise<any>;
    getInvoicingMonthByAllClass(year: number, month: number): Promise<InvoicingClass>;
    getInvoicingMonthsByClass(year: number): Promise<InvoicingClass[]>;
    getInvoicingMonthByOnePaymentMethod(year: number, month: number, method: number): Promise<any>;
    getInvoicingOneMonthAllPaymentMethod(year: number, month: number): Promise<Invoicing>;
    getInvoicingMonthsByPaymentMethod(year: number): Promise<Invoicing[]>;
    getInvoicingOneQuarterByOneClass(year: number, month1: number, month2: number, concept: string): Promise<any>;
    getInvoicingOneQuarterByAllClass(year: number, month1: number, month2: number): Promise<InvoicingClass>;
    getInvoicingOneYearByClassQuarter(year: number): Promise<InvoicingClass[]>;
    getInvoicingOneQuarterByOnePaymentMethod(year: number, month1: number, month2: number, method: number): Promise<any>;
    getInvoicingOneQuarterByAllPaymentMethod(year: number, month1: number, month2: number): Promise<Invoicing>;
    getInvoicingOneYearByPaymentMethodQuarter(year: number): Promise<Invoicing[]>;
    getInvoicingOneYearByOneClass(year: number, concept: string): Promise<any>;
    getInvoicingOneYearByClass(year: number): Promise<InvoicingClass>;
    getInvoicingOneYearByOneMethodPayment(year: number, method: number): Promise<any>;
    getInvoicingOneYearByMethodPayment(year: number): Promise<Invoicing>;
}

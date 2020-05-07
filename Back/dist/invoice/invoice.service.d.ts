import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Invoicing } from './invoicing-model';
import { InvoicingClass } from './invoicingClass-model';
export declare class InvoiceService {
    private readonly repositoryInvoice;
    private readonly logger;
    constructor(repositoryInvoice: Repository<Invoice>);
    getAll(): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
    getInvoicesOneClient(id: number): Promise<Invoice[]>;
    getInvoicing(): Promise<Invoicing>;
    getInvoicingYear(year: number): Promise<Invoicing>;
    getInvoicingOneMonth(year: number, month: number): Promise<Invoicing>;
    getInvoicingOneYearAllMonths(year: number): Promise<any[]>;
    getDefaulters(): import("typeorm").SelectQueryBuilder<Invoice>;
    getInvoicingOneDay(date: Date): Promise<Invoicing>;
    getPasses(): Promise<Invoice[]>;
    getInvoicingOnePeriod(dateInvoice1: Date, dateInvoice2: Date): Promise<Invoicing>;
    getInvoicingQuarter(): Promise<Invoicing[]>;
    getInvoicingMonthByOneClass(year: number, month: number, typeClass: string): Promise<number>;
    getInvoicingMonthByAllClass(year: number, month: number): Promise<InvoicingClass>;
    getIsNull(number: any): any;
    getInvoicingMonthsByClass(year: number): Promise<any[]>;
    sortingInvoicingClass(invoicingMonths: any[]): any[];
    getInvoicingMonthByOnePaymentMethod(year: number, month: number, method: number): Promise<any>;
    getInvoicingOneMonthAllPaymentMethod(year: number, month: number): Promise<Invoicing>;
    getInvoicingMonthsByPaymentMethod(year: number): Promise<any[]>;
    getInvoicingOneQuarterByOneClass(year: number, month1: number, month2: number, concept: string): Promise<number>;
    getInvoicingOneQuarterByAllClass(year: number, month1: number, month2: number): Promise<InvoicingClass>;
    getInvoicingOneYearByClassQuarter(year: number): Promise<InvoicingClass[]>;
    getInvoicingOneQuarterByOnePaymentMethod(year: number, month1: number, month2: number, method: number): Promise<any>;
    getInvoicingOneQuarterByAllPaymentMethod(year: number, month1: number, month2: number): Promise<Invoicing>;
    getInvoicingOneYearByPaymentMethodQuarter(year: number): Promise<Invoicing[]>;
    getInvoicingOneYearByOneClass(year: number, concept: string): Promise<number>;
    getInvoicingOneYearByClass(year: number): Promise<InvoicingClass>;
    getInvoicingOneYearByOneMethodPayment(year: number, method: number): Promise<any>;
    getInvoicingOneYearByMethodPayment(year: number): Promise<Invoicing>;
}

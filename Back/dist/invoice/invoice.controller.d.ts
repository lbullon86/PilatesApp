import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
import { Invoicing } from './invoicing-model';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    save(invoice: Invoice): Promise<Invoice>;
    getFacturacion(): Promise<Invoicing>;
    getInvoicingOneDay(date: Date): Promise<Invoicing>;
    getInvoicingOnePeriod(from: Date, to: Date): Promise<Invoicing>;
    getPasses(): Promise<Invoice[]>;
    getInvoicingQuarte(): Promise<Invoicing[]>;
    getBalance(): Promise<import("./balance").Balance>;
    getInvoicingClass(year: number): Promise<import("./invoicingClass-model").InvoicingClass>;
    getAll(): Promise<Invoice[]>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
    getInvoicingOneYearByClassQuarter(year: number): Promise<import("./invoicingClass-model").InvoicingClass[]>;
    getInvoicingOneQuarterAllClass(year: number, from: number, to: number): Promise<import("./invoicingClass-model").InvoicingClass>;
    getInvoicingOneQuarterAllMethodPayment(year: number, from: number, to: number): Promise<Invoicing>;
    getInvoicingMonthsrByClassQuarter(year: number, month: number): Promise<import("./invoicingClass-model").InvoicingClass>;
    getInvoicingOneMonthByOnePaymentMethod(year: number, month: number, method: number): Promise<Invoicing>;
    getInvoicingOneMonthByPaymentMethod(year: number, month: number): Promise<Invoicing>;
    getInvoicingMonthsByPaymentMethod(year: number): Promise<Invoicing[]>;
}

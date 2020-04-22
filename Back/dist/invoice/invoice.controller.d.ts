import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
import { Invoicing } from './invoicing-model';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    save(invoice: Invoice): Promise<Invoice>;
    getFacturacion(): Promise<Invoicing>;
    getInvoicingOneDay(date: Date): Promise<Invoicing>;
    getInvoicingOnePeriod(from: Date, to: Date): Promise<any>;
    getPasses(): Promise<Invoice[]>;
    getInvoicingQuarte(): Promise<Invoicing[]>;
    getAll(): Promise<Invoice[]>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
}

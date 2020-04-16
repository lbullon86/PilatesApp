import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    save(invoice: Invoice): Promise<Invoice>;
    getFacturacion(): Promise<any>;
    getAll(): Promise<Invoice[]>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
}

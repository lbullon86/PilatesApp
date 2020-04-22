import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Invoicing } from './invoicing-model';
export declare class InvoiceService {
    private readonly repositoryInvoice;
    constructor(repositoryInvoice: Repository<Invoice>);
    getAll(): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
    getInvoicing(): Promise<Invoicing>;
    getInvoicingOneDay(date: Date): Promise<Invoicing>;
    getPasses(): Promise<Invoice[]>;
    getInvoicingOnePeriod(dateInvoice1: Date, dateInvoice2: Date): Promise<any>;
    getInvoicingQuarter(): Promise<Invoicing[]>;
}

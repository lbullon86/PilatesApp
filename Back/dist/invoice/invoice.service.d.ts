import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { Clients } from '../clientes/clientes.entity';
import { Pass } from '../pass/pass.entity';
export declare class InvoiceService {
    private readonly repositoryInvoice;
    constructor(repositoryInvoice: Repository<Invoice>);
    getAll(): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
    getInvoiceOneClient(id: number): Promise<Invoice>;
    getFacturacion(): Promise<any>;
    getPasses(client: Clients): Promise<Pass>;
}

import { Repository, UpdateResult } from 'typeorm';
import { Clients } from './clientes.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { InvoiceService } from 'src/invoice/invoice.service';
import { Pass } from 'src/pass/pass.entity';
import { PassService } from 'src/pass/pass.service';
export declare class ClientesService {
    private readonly repositoryClients;
    private readonly invoiceService;
    private readonly passService;
    constructor(repositoryClients: Repository<Clients>, invoiceService: InvoiceService, passService: PassService);
    getAll(): Promise<Clients[]>;
    save(client: Clients): Promise<Clients>;
    getOne(id: number): Promise<Clients>;
    getInvoices(id: number): Promise<Invoice[]>;
    updateClient(client: Clients): Promise<UpdateResult>;
    saveInvoice(id: number, invoice: Invoice): Promise<Invoice>;
    getTypePass(invoice: Invoice): Pass;
    getPasses(client: Clients): Promise<Pass>;
    getDefaulters(): Promise<Clients[]>;
}

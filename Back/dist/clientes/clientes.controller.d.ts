import { ClientesService } from './clientes.service';
import { Clients } from './clientes.entity';
import { Invoice } from 'src/invoice/invoice.entity';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    getAll(): Promise<Clients[]>;
    save(client: Clients): Promise<Clients>;
    getDefaulters(): Promise<Clients>;
    getOne(id: number): Promise<Clients>;
    getInvoices(id: number): Promise<Invoice[]>;
    saveInvoice(id: number, invoice: Invoice): Promise<Invoice>;
    update(id: number, client: Clients): Promise<any>;
}

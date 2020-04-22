import { Clients } from 'src/clientes/clientes.entity';
import { Pass } from 'src/pass/pass.entity';
export declare class Invoice {
    idInvoice: number;
    concept: string;
    quantity: number;
    taxes: number;
    dateInvoice: Date;
    startDate: Date;
    expirationDate: Date;
    periodicity: number;
    paymentMethod: number;
    client: Clients;
    pass?: Pass;
}

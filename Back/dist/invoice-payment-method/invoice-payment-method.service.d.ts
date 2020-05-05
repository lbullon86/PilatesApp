import { Invoice } from 'src/invoice/invoice.entity';
import { Repository } from 'typeorm/repository/Repository';
export declare class InvoicePaymentMethodService {
    private readonly repositoryInvoice;
    constructor(repositoryInvoice: Repository<Invoice>);
    getInvoicingMonthByOnePaymentMethod(year: number, month: number, method: number): Promise<any>;
}

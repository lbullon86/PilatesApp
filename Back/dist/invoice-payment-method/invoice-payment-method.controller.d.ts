import { InvoicePaymentMethodService } from './invoice-payment-method.service';
export declare class InvoicePaymentMethodController {
    private invoicePayment;
    constructor(invoicePayment: InvoicePaymentMethodService);
    getInvoicingMonthByOnePaymentMethod(year: number, month: number, method: number): Promise<any>;
}

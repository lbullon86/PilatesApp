import { Module } from '@nestjs/common';
import { InvoicingPaymentMethodController } from './invoicing-payment-method.controller';

@Module({
  controllers: [InvoicingPaymentMethodController]
})
export class InvoicingPaymentMethodModule {}

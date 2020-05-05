import { Test, TestingModule } from '@nestjs/testing';
import { InvoicingPaymentMethodService } from './invoicing-payment-method.service';

describe('InvoicingPaymentMethodService', () => {
  let service: InvoicingPaymentMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoicingPaymentMethodService],
    }).compile();

    service = module.get<InvoicingPaymentMethodService>(InvoicingPaymentMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

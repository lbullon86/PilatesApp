import { Test, TestingModule } from '@nestjs/testing';
import { InvoicingPaymentMethodController } from './invoicing-payment-method.controller';

describe('InvoicingPaymentMethod Controller', () => {
  let controller: InvoicingPaymentMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoicingPaymentMethodController],
    }).compile();

    controller = module.get<InvoicingPaymentMethodController>(InvoicingPaymentMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

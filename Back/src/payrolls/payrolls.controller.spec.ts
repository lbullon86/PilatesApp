import { Test, TestingModule } from '@nestjs/testing';
import { PayrollsController } from './payrolls.controller';

describe('Payrolls Controller', () => {
  let controller: PayrollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollsController],
    }).compile();

    controller = module.get<PayrollsController>(PayrollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

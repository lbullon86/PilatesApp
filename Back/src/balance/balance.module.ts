import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';

import { InvoiceModule } from 'src/invoice/invoice.module';
import { ExpensesModule } from 'src/expenses/expenses.module';

@Module({
  providers: [BalanceService],
  imports: [InvoiceModule, ExpensesModule],
  controllers: [BalanceController]
})
export class BalanceModule {}

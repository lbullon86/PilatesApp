import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { InvoiceService } from 'src/invoice/invoice.service';
import { InvoiceModule } from 'src/invoice/invoice.module';

@Module({
  controllers: [ExpensesController],
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpensesService],
  exports: [ExpensesService]
})
export class ExpensesModule {}

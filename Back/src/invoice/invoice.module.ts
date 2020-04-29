import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesModule } from 'src/expenses/expenses.module';

@Module({
  
  controllers: [InvoiceController],
  imports:[TypeOrmModule.forFeature([Invoice]),ExpensesModule],
  providers: [InvoiceService],
  exports:[InvoiceService]
})
export class InvoiceModule {}

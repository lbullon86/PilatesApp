import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';

@Module({
  providers: [ExpensesService],
  controllers: [ExpensesController],
  imports: [TypeOrmModule.forFeature([Expense])]
})
export class ExpensesModule {}
